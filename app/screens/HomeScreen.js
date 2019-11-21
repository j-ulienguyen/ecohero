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

	// Get User Data - Specific to user_id
	const GetUserData = async()=>{
		try {
			var user_id = await AsyncStorage.getItem("user_id");
			var data = await ax("users_read", {id:user_id});

			var mission = await ax("completion_list_read", {id:user_id, status:3});
			setUserData(data[0]);

			var stars = 0;
			var xp = 0;
			// length of mission
			// for loop xp + stars

			console.log(mission)
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
						avatarPath = {require('../assets/imgs/can-avatar.png')}
						username = {userData.username || ""}
						missionAvailable = {16}
						level = {userData.level || 1}
						starCount = {userData.star_count || starAmount}
						missionCount = {userData.mission_count || 0}
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