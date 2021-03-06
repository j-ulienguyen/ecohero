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

	/*
	 *****************************************************************
	 *****************************************************************
	*/

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
			var currentXP;
			var xpCircle;
			var nextLevel;

			// Loop through to determine user's current level
			for (var level in xp_required){
				if (user[0].xp_amount >= xp_required[level]){
					currentLevel = parseInt(level);
					// console.log("Loop -> Current Level: ", currentLevel);
				}
			}

			// Set user level + xp
			currentLevel = user[0].level;
			currentXP = user[0].xp_amount;
			nextLevel = currentLevel + 1;

			// Calculate percentage for XP progress circle
			xpCircle = currentXP / xp_required[nextLevel];

			// Set percentage for XP progress circle for the user
			user[0].xpCircle = xpCircle;

			console.log("Current Level: ", currentLevel);
			console.log("Current XP: ", currentXP);
			console.log("XP Required for Next Level: ", xp_required[nextLevel]);
			console.log("XP Circle %: ", xpCircle);

			/*
             *****************************************************************
             *****************************************************************
            */

			// Check User Level + Stored Username
			var storedLevel = await AsyncStorage.getItem("level");

			var storedUsername = await AsyncStorage.getItem("username");
			var currentUsername = user[0].username;

			console.log("Stored Username: ", storedUsername);
			console.log("Current Username: ", currentUsername);

			// Prevent LevelUpModal from showing up after logging in if user's xp is the same as xp required to level up
			if (storedLevel === null){
				console.log("Stored Level is", storedLevel);

				AsyncStorage.setItem("level", JSON.stringify(currentLevel));

				console.log("Stored Level is now set to user's current level ->", currentLevel);
			}

			if (storedUsername){
				if(storedUsername == currentUsername){
					// Compare user level with device storage level
					// Determine whether to show LevelUpModal
					CheckLevel(currentLevel);
				} else {
					StoreUsername(user[0].username);
				}
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

	// Store Username
	var StoreUsername = async(username)=>{
		try {
			await AsyncStorage.setItem("username", username);
			console.log("StoreUsername: ", username)
		} catch (error){
			console.log("Error saving data", error.message);
		}
		// console.log("End of StoreUsername");
	}

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	const CheckLevel = async(userLevel)=>{
		var level = await AsyncStorage.getItem("level");

		level = parseInt(level);
		userLevel = parseInt(userLevel);

		// If there is a reference from device storage for level
		// Check to see whether LevelUpModal shows

		// Don't show modal
		// Prevent modal from repeatedly showing up after navigating away
		if (userLevel == level){
			console.log("ul = level");
			setToggleModal(false);
		}

		// Show modal because there is a reference
		// User level is higher than the reference level -> User completed enough missions to raise their level
		else if (level && userLevel > level){
			AsyncStorage.setItem("level", JSON.stringify(userLevel));
			setToggleModal(true);

			console.log("level && ul > level");
		}

		// Show modal because user leveled up and there's no reference
		else if (level && userLevel > 1){
			AsyncStorage.setItem("level", JSON.stringify(userLevel));
			setToggleModal(true);

			console.log("ul > 1");
		}

		// Don't show modal
		// There is no reference
		else if (!level){
			AsyncStorage.setItem("level", JSON.stringify(1));
			console.log("!level");
		}

		// Does nothing otherwise

		console.log("CheckLevel Device: ", level);
		console.log("CheckLevel User: ", userLevel);
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
	var userXP = userData.xpCircle;

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

	var progressWidth = 0;
	var checkpoint5 = theme.xlightGray;
	var checkpoint10 = theme.xlightGray;
	var checkpoint20 = theme.xlightGray;

	// 315 width / 20 stars
	// 15.75 = 1 star
	// 78.75 = 5 stars

	const fullProgressBar = 315;
	const starIncrement = 15.75;


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

		// Calculate the fill for progress bar
		progressWidth = (userStarCount * starIncrement);

		// 5 Star - Checkpoint
		if (userStarCount >= 5){
			checkpoint5 = theme.lightGreen;
		}

		// 10 Star - Checkpoint
		if (userStarCount >= 10){
			checkpoint10 = theme.lightGreen;
		}

		// 20 Star - Checkpoint
		if (userStarCount >= 20){
			checkpoint20 = theme.lightGreen;
		}

		// Set progress text
		var progressText = (
			<Text>You’re <Text style={styles.boldText}>{starRemainder}</Text> away from unlocking the {prizeName}!</Text>
		);
	}

	// User has 20+ stars
	// User has unlocked all prizes
	if (userStarCount >= 20){

		// Full Progress Bar
		progressWidth = fullProgressBar;
		checkpoint5 = theme.lightGreen;
		checkpoint10 = theme.lightGreen;
		checkpoint20 = theme.lightGreen;

		// Set progress text
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
						progressCircle = {userXP}
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