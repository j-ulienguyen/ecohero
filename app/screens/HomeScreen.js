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

	// Get User Data - Specific to user_id
	const GetUserData = async()=>{
		var user_id = await AsyncStorage.getItem("user_id");
		var data = await ax("users_read", {id:user_id});
		setUserData(data[0]);
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
						avatarPath = {require('../assets/imgs/can-avatar.png')}
						username = {userData.username || ""}
						missionAvailable = {30}
						level = {userData.level}
						starCount = {userData.star_count}
						missionCount = {0}
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