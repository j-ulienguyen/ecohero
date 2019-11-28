import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Modal from 'react-native-modal';

// Import comps & styles below
import styles from '../styles/HomeScreenStyles';
import PatternBG from '../comps/PatternBG';
import ProfileCard from '../comps/home/ProfileCard';
import PrizeProgress from '../comps/home/PrizeProgress';
import PrizeCard from '../comps/home/PrizeCard';
import NavBar from '../comps/NavBar';
import LevelUpModal from '../comps/home/LevelUpModal';
import GreenButton from '../comps/GreenButton';

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

		var availableMissions;

		try {
			var user = await ax("users_read", {id:user_id});

			var missions = await ax("missions_read", {user_id:user_id});

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

			// Set User Data
			setUserData(user[0]);
		} catch (error){
			console.log("Error GetUserData")
		}
		// console.log("End of GetUserData");
	}


	// Load once
    useEffect(()=>{
		GetUserData();
	}, [])


	var username = userData.username;
	var userAvatar = userData.avatar;
	var userStarCount = userData.star_count;
	var userMissionCount = userData.mission_count;
	var userMissionAvailable = userData.mission_available;
	var userLevel = userData.level;
	var userXP = userData.xp_amount;


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

	// Call function to update user data inside db
	UpdateUserData();


	// User Star Count and Prize Cards
	// User will unlock prizes if they reach the required star amount
	// Star Prizes has max star amount of 20

	// Init vars
	var prizeStatus; // To be used later inside prizeCards.map
	var progressText;
	var congratsText;

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


	// User Level Up
	// Level 1: 0
	// Level 2: 50
	// Level 3: 150
	// Level 4: 250
	// Level 5: 350
	// Level 6: 450

	console.log("Current XP: ", userXP);


	// function UserLevelUp(currentXP){
	// 	var xp_required = [0, 50, 150, 250, 350, 450]; // Level: 1, 2, 3, 4, 5, 6
	// 	var maxLevel = xp_required.length;

	// 	for(var level = 0; level < maxLevel; level++){
	// 		if (xp_required[level] > currentXP){
	// 			return level;
	// 		}
	// 	}

	// 	return maxLevel;
	// }

	//UserLevelUp(userXP);


	function GetUserLevel(currentXP, currentLevel){
		// This is the amount of XP required for each level
		// Level:XP
		var xp_required = {
			1: 0,
			2: 50,
			3: 150,
			4: 250,
			5: 350,
			6: 450
		}

		// Loop through to determine user's current level
		for (var level in xp_required){
			if (currentXP >= xp_required[level]){
				currentLevel = level;
				console.log("Current Level: ", currentLevel);
			}
		}
	}

	GetUserLevel(userXP, userLevel);


	// if (userXP == 50){
	// 	userLevel = 2;
	// }

	// else if (userXP == 150){
	// 	userLevel = 3;
	// }

	// else if (userXP == 250){
	// 	userLevel = 4
	// }

	// else if (userXP == 350){
	// 	userLevel = 5
	// }

	// else if (userXP == 450){
	// 	userLevel = 6
	// }

	//setToggleModal(true);



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
						username = {username || ""}
						missionAvailable = {userMissionAvailable}
						level = {userLevel}
						starCount = {userStarCount || 0}
						missionCount = {userMissionCount}
					/>

					{/* Star Prizes - Progress Bar */}
					<PrizeProgress
						progressText = {progressText}
						congratsText = {congratsText}
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
						userXP = userXP + 1;
					}}
				/>
			</Modal>


			{/* Navigation Bar */}
			<NavBar currentScreen="HomeScreen"/>
		</View>
    )
}