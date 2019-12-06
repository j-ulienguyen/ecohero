import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Modal from 'react-native-modal';

// Import comps & styles below
import styles from '../styles/ProfileScreenStyles';
import theme from '../styles/ThemeStyles';
import PatternBG from '../comps/PatternBG';
import ProfileCard from '../comps/home/ProfileCard';
import SettingsIcon from '../comps/profile/SettingsIcon';
import AchievementCard from '../comps/profile/AchievementCard';
import ProfileBadge from '../comps/profile/ProfileBadge';
import NavBar from '../comps/NavBar';
import GreenButton from '../comps/GreenButton';
import PurpleButton from '../comps/PurpleButton';

// Import data files below
import {badges} from '../data/BadgeData';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';

// Navigation
import * as navigateTo from '../../RouteConstants';


export default function ProfileScreen(){

	// User Data
    const [userData, setUserData] = useState({});

	// Normal Missions
	const [allMissions, setMissions] = useState([]);

	// Settings -> Modal
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

            /*
             *****************************************************************
             *****************************************************************
            */

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

    // Load all missions from db
    const GetMissions = async()=>{
        var user_id = await AsyncStorage.getItem("user_id");
        user_id = parseInt(user_id);

        var missions = await ax("missions_read", {user_id:user_id});

        // Show entire mission list inside console
        // console.log("Missions List", missions);
        // console.log("Mission List length ", missions.length);

        setMissions(missions);
    }

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	const LogoutUser = async()=>{
		try {
			// Clear local storage
			await AsyncStorage.clear();
			// Navigate to Signin Screen
			navigateTo.Signin();

			console.log("User has logged out.");
		} catch(error){
			console.log("Error LogoutUser", error.message);
		}
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
	var userLevel = userData.level;
	var userXP = userData.xpCircle;

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	// Init vars
	var badgeStatus;

    // Mission_type = 1 -> Normal
	// Mission_type = 2 -> Bonus
	// Status = 3 -> Completed

    var normalMission = allMissions;
	var bonusMission = allMissions;

	var firstBonusMission;
	var recycleMissions;

	// New Leaf Badge
	// Completed first bonus mission
	bonusMission = allMissions.filter((obj, i)=>{
		return (!obj.status || obj.status === 3) && obj.mission_type == 2;
	});

	firstBonusMission = bonusMission.length;

	// Recycler Badge
	// Completed 5 recycle missions
	normalMission = allMissions.filter((obj, i)=>{
		return (!obj.status || obj.status === 3) && obj.mission_type == 1 && obj.mission_icon == 'recycle';
	});

	recycleMissions = normalMission.length;


	/*
	 *****************************************************************
	 *****************************************************************
	*/

	// Load once
    useEffect(()=>{
		GetUserData();
		GetMissions();
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

            <ScrollView>
                {/* Profile Card - Compact Version */}
                <View style={{marginTop: -150}}>
                    <ProfileCard
                        type = "compact"
                        avatarPath = {avatarIcon[userAvatar]}
						username = {userName || ""}
						level = {userLevel}
						progressCircle={userXP}
                    />
                </View>

                {/* Settings - Gear Icon */}
                <SettingsIcon
					onPress={()=>{
						setToggleModal(true);
				}}/>

                <View style={styles.achievementSection}>
                    {/* Total Stars Card */}
                    <AchievementCard
                        type = "totalStars"
                        count = {userStarCount}
                    />
                    {/* Completed Missions Card */}
                    <AchievementCard
                        type = "completedMissions"
                        count = {userMissionCount}
                    />
                </View>

                <View style={styles.centerContent}>
                    <View style={styles.badgeSection}>
                        {/* Badge Heading */}
                        <Text style={styles.sectionHeading}>Badges</Text>

                        {/* Badges x 6 */}
                        <View style={styles.badgeContainer}>
                            {
                                badges.map((obj, i)=>{
									// Badges initially locked
									badgeStatus = false;

									// Initiation Badge
									if(i == 0 && userMissionCount >= 1){
										badgeStatus = true;
									}

									// New Leaf Badge
									if (i == 1 && firstBonusMission >= 1){
										badgeStatus = true;
									}

									// Recycler Badge
									if (i == 2 && recycleMissions >= 5){
										badgeStatus = true;
									}

									// High Five Badge
									if (i == 3 && userLevel >= 5){
										badgeStatus = true;
									}

									// Grand Star Badge
									if (i == 4 && userStarCount >= 30){
										badgeStatus = true;
									}

									// 10 Missions Badge
									if (i == 5 && userMissionCount >= 10){
										badgeStatus = true;
									}


                                    return <ProfileBadge
                                        key = {i}
                                        badgeName = {obj.badgeName}
                                        description = {obj.description}
                                        imagePath = {obj.imagePath}
                                        //status = {obj.status}
										status = {badgeStatus}
                                    />
                                })
                            }
                        </View>
                    </View>

                    {/* Mission In Progress Modal */}
                    <Modal isVisible={toggleModal}>
                        <View style={styles.modalContainer}>
							<View style={styles.modal}>
								{/* Settings - Modal Heading */}
								<Text style={styles.modalHeading}>Settings</Text>

								{/* Logout Button */}
								<GreenButton
									title="Log out"
									width={174}
									height={43}
									onPress={()=>{
										setToggleModal(false); // Close modal
										LogoutUser(); // Clear storage, logout, navigate to Signin Screen
									}}
								/>

								{/* Close Button */}
								<View style={{position:"absolute", top: -20, right: -5}}>

								<PurpleButton
									title="x"
									width={40}
									height={40}
									onPress={()=>{
										setToggleModal(false); // Close modal
									}}
								/>
								</View>
							</View>
						</View>
                    </Modal>

                </View>
            </ScrollView>

            {/* Navigation Bar */}
            <NavBar currentScreen="ProfileScreen"/>
        </View>
    )
}