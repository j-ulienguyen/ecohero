import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Modal from 'react-native-modal';

// Import comps & styles below
import styles from '../styles/HomeScreenStyles';
import theme from '../styles/ThemeStyles';
import PatternBG from '../comps/PatternBG';
import ProfileCard from '../comps/home/ProfileCard';
import PrizeProgress from '../comps/home/PrizeProgress';
import PrizeCard from '../comps/home/PrizeCard';
import NavBar from '../comps/NavBar';
import LevelUpModal from '../comps/home/LevelUpModal';

// Import data files below
import {prizeCards} from '../data/PrizeCardData';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';


export default function HomeScreen(){

	// User Data
	const [userData, setUserData] = useState({});

	// Level Up Modal
	const [toggleModal, setToggleModal] = useState(false);

	// Avatar Icons
	// avatarIcon['name']
	const avatarIcon = {
		'jug': require('../assets/imgs/jug-avatar.png'),
		'tote': require('../assets/imgs/tote-avatar.png'),
		'bottle': require('../assets/imgs/bottle-avatar.png'),
		'can': require('../assets/imgs/can-avatar.png'),
		'paper': require('../assets/imgs/paper-avatar.png'),
		'lunchbox': require('../assets/imgs/lunchbox-avatar.png')
	}


	// Get User Data - Specific to user_id
	const GetUserData = async()=>{
		var user_id = await AsyncStorage.getItem("user_id");
		user_id = parseInt(user_id);

		try {
			var user = await ax("users_read", {id:user_id});
			var missions = await ax("missions_read", {user_id:user_id});

            /*
             *****************************************************************
             *****************************************************************
            */

			var availableMissions;
			// Filter all missions to only get active bonus and normal missions
			// Type > 0 will ignore missions in the table that is mission_type=-1
			availableMissions = missions.filter((obj, i)=>{
				return obj.mission_type >= 0;
			});

			// Store length of available missions at the start
			availableMissions = availableMissions.length;

			// Read table from following data
			// Status = 3 -> Completed Missions
			// Status = 4 -> Onboarding Reward Mission (mission_id: 1)
			var completedMissions = await ax("completion_list_read", {user_id:user_id, status:[3,4]});

			// Init starting values
			var stars = 0;
			var xp = 0;

			// Loop through list of completed missions
			// Add up star + xp amount
			for(i = 0; i < completedMissions.length; i++){
				stars += completedMissions[i].stars || 0;
				xp += completedMissions[i].xp || 0;
			}

			// Set the amount for the user
			// Current amount of stars + xp
			user[0].star_count = stars;
			user[0].xp_amount = xp;

			// Filter through the completed missions to reference only those with status=3
			// This will ignore counting the Onboarding Reward mission
			completedMissions = completedMissions.filter((obj, i)=>{
				return obj.status === 3;
			});

			// Store length of completed missions
			completedMissions = completedMissions.length;

			// Set the amount for the user
			// Current amount of completed missions and available missions
			user[0].mission_count = completedMissions || 0;
			user[0].mission_available = availableMissions - completedMissions;


			// Show the amount of available missions
			// console.log("# of Available Missions: ", availableMissions);

			// Show list of completed missions
			// console.log("List of Completed Missions: ", completedMissions);
			// console.log("# of Completed Missions: ", completedMissions);

			// Show current amount of available missions for the user
			// console.log("Current # of Available Missions: ", user[0].mission_available);

            /*
             *****************************************************************
             *****************************************************************
            */

			// User Level Up
			// This is the amount of XP required for each level -> Level:XP
			var xp_required = {
				1: 0,
				2: 50,
				3: 150,
				4: 250,
				5: 350,
				6: 450
			}

			var currentLevel;

			// Loop through to determine user's current level
			for (var level in xp_required){
				if (user[0].xp_amount >= xp_required[level]){
					currentLevel = parseInt(level);
					console.log("Loop -> Current Level: ", currentLevel);
				}
			}

			// Set user level
			user[0].level = currentLevel;
			console.log("User Level: ", user[0].level);
			console.log("Current XP: ", user[0].xp_amount);

			// Toggle Level Up Modal
			// When userXP reaches required XP needed to level up
			if ( user[0].xp_amount == 50 || user[0].xp_amount == 150){
				setToggleModal(true);
				user[0].xp_amount = user[0].xp_amount + 5;
			} else {
				setToggleModal(false);
			}

            /*
             *****************************************************************
             *****************************************************************
            */

			// Set User Data
			setUserData(user[0]);
		} catch (error){
			console.log("Error GetUserData", error.message);
		}
		// console.log("End of GetUserData");
	}

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	// Reassign vars
	var userName = userData.username;
	var userAvatar = userData.avatar;
	var userStarCount = userData.star_count;
	var userMissionCount = userData.mission_count;
	var userMissionAvailable = userData.mission_available;
	var userLevel = userData.level;
	var userXP = userData.xp_amount;

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	// Update User Data
	const UpdateUserData = async()=>{
		var user_id = await AsyncStorage.getItem("user_id");
		user_id = parseInt(user_id);

		try {
			var user_data = await ax("users_update", {id: user_id, star_count:userStarCount, mission_count:userMissionCount, xp_amount:userXP, level:userLevel});

			console.log("UpdateUserData: ", user_data);
		} catch (error){
			console.log("Error UpdateUserData", error.message);
		}
		// console.log("End of UpdateUserData");
	}

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	// User Star Count and Prize Cards
	// User will unlock prizes if they reach the required star amount
	// Star Prizes has max star amount of 20

	// Init vars
	var prizeStatus; // To be used later inside prizeCards.map
	var progressText;
	var congratsText;

	var progressWidth = 315;
	var checkpoint5;
	var checkpoint10;
	var checkpoint20;

	// User has less than 20 stars
	if (userStarCount <= 20){
		console.log("Current Stars: ", userStarCount);

		var prizeStarCount;
		var starRemainder;
		var prizeName;

		// Bronze Prize Card - Star Req: 5
		if (userStarCount < 5){
			prizeName = "Bronze Prize";
			prizeStarCount = 5;
		}

		// Silver Prize Card - Star Req: 10
		else if (userStarCount < 10){
			prizeName = "Silver Prize";
			prizeStarCount = 10;
		}

		// Gold Prize Card - Star Req: 20
		else if (userStarCount < 20){
			prizeName = "Gold Prize";
			prizeStarCount = 20;
		}

		// Calculate stars remaining to reach next prize
		starRemainder = (prizeStarCount - userStarCount) + ' stars';
		// console.log("Star Remainder: ", starRemainder);

		// Set progress text
		var progressText = (
			<Text>You’re <Text style={styles.boldText}>{starRemainder}</Text> away from unlocking the {prizeName}!</Text>
		);
	}

	// User has 20+ stars
	// User has unlocked all prizes
	if (userStarCount >= 20){
		progressText = null;
		congratsText = (
			<Text>You’ve unlocked all of the prizes. <Text style={styles.boldText}>Congratulations!</Text></Text>
		);
	}

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	// Load once
    useEffect(()=>{
		GetUserData();
	}, [])

	// Call function to update user data inside db
	UpdateUserData();

	/*
	 *****************************************************************
	 *****************************************************************
	*/

    // UI
    return (
		<View style={styles.container}>
			{/* Fixed Pattern BG */}
			<PatternBG/>

			{/* Scrollable Content - On Top*/}
			<ScrollView>
				<View>
					{/* Profile Card - Full Version */}
					<ProfileCard
						type = "full"
						avatarPath = {avatarIcon[userAvatar]}
						username = {userName || ""}
						missionAvailable = {userMissionAvailable}
						level = {userLevel}
						starCount = {userStarCount || 0}
						missionCount = {userMissionCount}
					/>

					{/* Star Prizes - Progress Bar */}
					<PrizeProgress
						progressText = {progressText}
						congratsText = {congratsText}

						progressWidth = {progressWidth}
						checkpoint5 = {checkpoint5}
						checkpoint10 = {checkpoint10}
						checkpoint20 = {checkpoint20}
					/>

					{/* Prize Card Section */}
					<View style={styles.prizeSection}>
						{/* Populate with Prize Card from PrizeCardData.js */}
						{
							prizeCards.map((obj,i)=>{
								// Prizes initially locked
								prizeStatus = false;

								// Bronze Prize
								if (i == 0 && userStarCount >= 5){
									prizeStatus = true;
								}

								// Silver Prize
								if (i == 1 && userStarCount >= 10){
									prizeStatus = true;
								}

								// Gold Prize
								if (i == 2 && userStarCount >= 20){
									prizeStatus = true;
								}

								return <PrizeCard
									key = {i}
									prizeName = {obj.prizeName}
									description = {obj.description}
									imagePath = {obj.imagePath}
									starCount = {obj.starCount}
									//status = {obj.status}
									status = {prizeStatus}
								/>
							})
						}
					</View>
				</View>
			</ScrollView>

			{/* Level Up Modal */}
			<Modal isVisible={toggleModal}>
				<LevelUpModal
					level = {userLevel}
					onPress = {()=>{
						setToggleModal(false); // Close modal
					}}
				/>
			</Modal>


			{/* Navigation Bar */}
			<NavBar currentScreen="HomeScreen"/>
		</View>
    )
}