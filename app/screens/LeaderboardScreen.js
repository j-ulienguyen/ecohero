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


export default function LeaderboardScreen() {
	const [activeTab, setActiveTab] = useState("Weekly");

    const [userData, setUserData] = useState({});

	// Get User Data - Specific to user_id
	const GetUserData = async()=>{
		try {
			var user_id = await AsyncStorage.getItem("user_id");
			var data = await ax("users_read", {id:user_id});
			setUserData(data[0]);
		} catch (error){
			console.log("Error GetUserData")
		}
	}

	// HOW TO USE
	// ... = {userData.KEY || Default value}

	// Load once
    useEffect(()=>{
        GetUserData();
	}, [])


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
					setActiveTab = {setActiveTab}
				/>

				{/* Leaderboard Friends Card Section*/}
				<View style={styles.cardSection}>
					{/* Populate with Friends Card from FriendsData.js */}
					{
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
					}
				</View>
			</ScrollView>

			{/* Navigation Bar */}
			<NavBar currentScreen="LeaderboardScreen"/>

			{/* Leaderboard User Card */}
			<View style={{position: 'absolute', bottom: 55}}>
				<LeaderboardUser
					username={userData.username}
					iconPath={require('../assets/imgs/can-avatar.png')}
					rankNumber={35}
					starCount={2}
				/>
			</View>
		</View>
	);
}
