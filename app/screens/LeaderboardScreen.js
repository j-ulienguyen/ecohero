import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps below
import styles from '../styles/LeaderboardScreenStyles';
import PatternBG from '../comps/PatternBG';
import LeaderboardCard from '../comps/leaderboard/LeaderboardCard';
import LeaderboardUser from '../comps/leaderboard/LeaderboardUser';
import FriendsCard from '../comps/leaderboard/FriendsCard';
import NavBar from '../comps/NavBar';

// Import data files below
import {friends} from '../data/FriendsData';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';


export default function LeaderboardScreen({navigation}) {

	// Filter Tab Menu
	var defaultTab = navigation.state.params.activeTab || "Weekly";
	const [activeTab, setActiveTab] = useState(defaultTab);

	// User Data
    const [userData, setUserData] = useState({});

	// All Users Data - Leaderboard
	const [leaderboardUsers, setLeaderboardUsers] = useState([]);

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

	// Init vars - For Filter Tab Menu

	var statusTab1 = true;
	var statusTab2 = true;
	var statusTab3 = false;
	// var statusTab1;
	// var statusTab2;
	// var statusTab3;

	if (activeTab === "Weekly"){
		statusTab1 = true;
		statusTab2 = false;
		statusTab3 = false;
	}

	if (activeTab === "Monthly"){
		statusTab1 = false;
		statusTab2 = true;
		statusTab3 = false;
	}

	if (activeTab === "All-time"){
		statusTab1 = false;
		statusTab2 = false;
		statusTab3 = true;
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

			// Read table from following data
			// Status = 3 -> Completed Missions
			// Status = 4 -> Onboarding Reward Mission (mission_id: 39)
			var completedMissions = await ax("completion_list_read", {user_id:user_id, status:[3,4]});

			// Init starting values
			var stars = 0;

			// Loop through list of completed missions
			// Add up star amount
			for(i = 0; i < completedMissions.length; i++){
				stars += completedMissions[i].stars || 0;
			}

			// Set the amount for the user
			// Current amount of stars
			user[0].star_count = stars;

			// Set User Data
			setUserData(user[0]);
		} catch (error){
			console.log("Error GetUserData", error.message)
		}
	}

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	const GetAllUsers = async()=>{
		var user_id = await AsyncStorage.getItem("user_id");
		user_id = parseInt(user_id);

		try {
			var allUsers = await ax("users_read_stars", {});
			//console.log("GetAllUsers: ", allUsers);
			// Set Leaderboard Users into empty array
			setLeaderboardUsers(allUsers);
		} catch(error){
			console.log("Error GetAllUsers", error.message)
		}
	}

	var allUsers = leaderboardUsers;

	// Sort the array in descending order
	// Highest -> Least star_count
	allUsers.sort((a, b) => parseInt(b.star_count) - parseInt(a.star_count));


	var cardType;

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	// Load once
    useEffect(()=>{
		GetUserData();
		GetAllUsers();
	}, [])

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	// UI
	return (
		<View style={styles.container}>
			{/* Fixed Pattern BG */}
			<PatternBG />

			{/* Scrollable Content - On Top */}
			<ScrollView>
				{/* Leaderboard Card */}
				<LeaderboardCard
					// Filter Tab Menu
					tab1 = "Weekly"
					tab2 = "Monthly"
					tab3 = "All-time"

					statusTab1 = {statusTab1}
					statusTab2 = {statusTab2}
					statusTab3 = {statusTab3}

					setActiveTab = {setActiveTab}
				/>

				{/* Leaderboard Friends Card Section*/}
				<View style={styles.cardSection}>
					{
						allUsers.map((obj, i)=>{
							// All cards initially normal
							cardType = "normal";

							// First Place
							if (i == 0){
								cardType = "first";
							}

							// Second Place
							if (i == 1){
								cardType = "second";
							}

							// Third Color
							if (i == 2){
								cardType = "third";
							}

							return <FriendsCard
								key = {i}
								type = {cardType}
								username = {obj.username}
								starCount = {obj.star_count}
								iconPath = {avatarIcon[obj.avatar]}
								rankNumber = {i+1} // Need to +1 b/c index starts at 0
							/>
						})
					}
					{/* Populate with Friends Card from FriendsData.js */}
					{/* {
						friends.map((obj, i)=>{
							return <FriendsCard
								key = {i}
								type = {obj.type}
								username = {obj.username}
								starCount = {obj.starCount}
								iconPath = {obj.iconPath}
								rankNumber = {obj.rankNumber}
							/>
						})
					} */}
				</View>
			</ScrollView>

			{/* Navigation Bar */}
			<NavBar currentScreen="LeaderboardScreen"/>

			{/* Leaderboard User Card */}
			<View style={{position: 'absolute', bottom: 55}}>
				<LeaderboardUser
					username = {userData.username}
					iconPath = {avatarIcon[userData.avatar]}
					rankNumber = {35}
					starCount = {userData.star_count}
				/>
			</View>
		</View>
	);
}
