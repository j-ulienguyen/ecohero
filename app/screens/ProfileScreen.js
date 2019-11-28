import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/ProfileScreenStyles';
import theme from '../styles/ThemeStyles';
import PatternBG from '../comps/PatternBG';
import ProfileCard from '../comps/home/ProfileCard';
import SettingsIcon from '../comps/profile/SettingsIcon';
import AchievementCard from '../comps/profile/AchievementCard';
import ProfileBadge from '../comps/profile/ProfileBadge';
import NavBar from '../comps/NavBar';

// Import data files below
import {badges} from '../data/BadgeData';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';


export default function ProfileScreen(){

    const [userData, setUserData] = useState({});

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

			// Loop through to determine user's current level
			for (var level in xp_required){
				if (user[0].xp_amount >= xp_required[level]){
					currentLevel = parseInt(level);
					console.log("Loop -> Current Level: ", currentLevel);
				}
			}

			// Set user level
			user[0].level = currentLevel;

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
	var userLevel = userData.level;
	var userXP = userData.xp_amount;

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

            <ScrollView>
                {/* Profile Card - Compact Version */}
                <View style={{marginTop: -150}}>
                    <ProfileCard
                        type = "compact"
                        avatarPath = {avatarIcon[userAvatar]}
						username = {userName || ""}
						level = {userLevel}
                    />
                </View>

                {/* Settings - Gear Icon */}
                <SettingsIcon/>

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
                                    return <ProfileBadge
                                        key = {i}
                                        badgeName = {obj.badgeName}
                                        description = {obj.description}
                                        imagePath = {obj.imagePath}
                                        status = {obj.status}
                                    />
                                })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Navigation Bar */}
            <NavBar currentScreen="ProfileScreen"/>
        </View>
    )
}