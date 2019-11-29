import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../styles/RewardModalStyles';
import RewardsBar from './missions/RewardsBar';
import GreenButton from '../comps/GreenButton';
import theme from '../styles/ThemeStyles';

// Navigation
import * as navigateTo from '../../RouteConstants';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';


export default function RewardModal({heading, description, imagePath, starAmount, xpAmount}){

    //const {starAmount, xpAmount} = navigation.state.params;
    console.log("Reward Modal ", "Star: ", starAmount, "XP: ", xpAmount);

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	// User Data
	const [userData, setUserData] = useState({});

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

            /*
             *****************************************************************
             *****************************************************************
            */

			// Set user level
			user[0].level = currentLevel;
			console.log("User Level: ", user[0].level);
            console.log("Current XP: ", user[0].xp_amount);

            // Set User Data
            setUserData(user[0]);
        } catch (error){
            console.log("Error GetUserData on Reward", error.message);
        }
    }

    // Reassign vars
	var userStarCount = userData.star_count;
	var userMissionCount = userData.mission_count;
	var userLevel = userData.level;
	var userXP = userData.xp_amount;

	/*
	 *****************************************************************
	 *****************************************************************
	*/

	// Update User Data
	const UpdateUserData = async()=>{
		var user_id = await AsyncStorage.getItem("user_id");
		user_id = parseInt(user_id);

		try {
			var user_data = await ax("users_update", {id: user_id, star_count:userStarCount, mission_count:userMissionCount, xp_amount:userXP, level:userLevel});

            /*
                Following data that will be updated after onPress
                - star_count
                - mission_count
                - xp_amount
                - level
            */
            console.log("UpdateUserData: ", user_data);

            // Navigate to Home Screen after updating
            navigateTo.Home();

		} catch (error){
			console.log("Error UpdateUserData", error.message);
		}
		// console.log("End of UpdateUserData");
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
            <Text style={styles.mainHeading}>{heading}</Text>
            <Text style={styles.description}>{description}</Text>

            {/* Reward Image */}
            <Image
                style = {styles.rewardImage}
                source = {imagePath}
            />

            {/* You Earned - Rewards Bar */}
            <Text style={styles.earnedText}>You Earned</Text>
            <RewardsBar
                barBG="#DFF0D7"
                starAmount={starAmount}
                xpAmount={xpAmount}
            />

            {/* Redeem Button */}
            <GreenButton
                title="Done"
                width={309} height={43} marginTop={50}
                onPress={()=>{
                    UpdateUserData();
                }}
            />
        </View>
    )
}