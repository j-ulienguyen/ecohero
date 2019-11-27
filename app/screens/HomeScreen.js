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

	const [userData, setUserData] = useState({});

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
			// Status = 4 -> Onboarding Reward Mission (mission_id: 39)
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


			// Show the current amount of XP user has
			// console.log("Current User XP: ", user[0].xp);

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


	// const [toggleModal, setToggleModal] = useState(false);

	// var levelupModal;

	// // Toggle Modal
	// if (toggleModal === true){
	// 	levelupModal = (
	// 		<Modal isVisible={toggleModal}>
	// 			<LevelUpModal
	// 				level = {5}
	// 				onPress = {()=>{
	// 					setToggleModal(false); // Close modal
	// 				}}
	// 			/>
	// 		</Modal>
	// 	)
	// } else {
	// 	levelupModal = null;
	// }


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
						avatarPath = {avatarIcon[userData.avatar]}
						username = {userData.username || ""}
						missionAvailable = {userData.mission_available}
						level = {userData.level}
						starCount = {userData.star_count || 0}
						missionCount = {userData.mission_count}
					/>

					{/* Star Prizes - Progress Bar */}
					<PrizeProgress starRemainder={5+' stars'} prizeName="Silver Prize"/>

					{/* Prize Card Section */}
					<View style={styles.prizeSection}>
						{/* Populate with Prize Card from PrizeCardData.js */}
						{
							prizeCards.map((obj,i)=>{
								return <PrizeCard
									key = {i}
									prizeName = {obj.prizeName}
									description = {obj.description}
									imagePath = {obj.imagePath}
									starCount = {obj.starCount}
									status = {obj.status}
								/>
							})
						}
					</View>
				</View>


			</ScrollView>

			{/* Level Up Modal */}
			{/* {levelupModal} */}

			{/* Navigation Bar */}
			<NavBar currentScreen="HomeScreen"/>
		</View>
    )
}