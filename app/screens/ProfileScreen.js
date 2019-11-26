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
			<PatternBG/>

            <ScrollView>
                {/* Profile Card - Compact Version */}
                <View style={{marginTop: -150}}>
                    <ProfileCard
                        type = "compact"
                        avatarPath = {avatarIcon[userData.avatar]}
						username = {userData.username || ""}
						level = {userData.level}
                    />
                </View>

                {/* Settings - Gear Icon */}
                <SettingsIcon/>

                <View style={styles.achievementSection}>
                    {/* Total Stars Card */}
                    <AchievementCard
                        type = "totalStars"
                        count = {userData.star_count}
                    />
                    {/* Completed Missions Card */}
                    <AchievementCard
                        type = "completedMissions"
                        count = {userData.mission_count}
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