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


export default function HomeScreen({starAmount}){

	const [userData, setUserData] = useState({});
	const [userStars, setUserStars] = useState(0);
	const [userXP, setUserXP] = useState(0);
	// const [userMissions, setUserMissions] = useState(0);

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

		try {
			var data = await ax("users_read", {id:user_id});

			var mission = await ax("completion_list_read", {user_id:user_id, status:[3,4]});

			var stars = 0;
			var xp = 0;

			// length of mission
			// for loop xp + stars
			for(i=0; i < mission.length; i++){
				stars += mission[i].stars || 0;
				xp += mission[i].xp || 0;
			}

			data[0].stars = stars;
			data[0].xp = xp;

			ecomission = mission.filter((obj, i)=>{
				return obj.status === 3;
			});

			data[0].mission_count = ecomission.length || 0;

			console.log("Home mission");
			console.log(mission)

			setUserData(data[0]);
		} catch (error){
			console.log("Error GetUserData")
		}
		console.log("End of GetUserData");
	}

	// HOW TO USE
	// ... = {userData.KEY || Default value}

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
						missionAvailable = {15}
						level = {userData.level}
						starCount = {userData.stars || 0}
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