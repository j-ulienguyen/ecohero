import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/MissionCardStyles';
import theme from '../../styles/ThemeStyles';
import RewardsBar from './RewardsBar';
import GreenButton from '../GreenButton';
import PurpleButton from '../PurpleButton';

// Navigation
import * as navigateTo from '../../../RouteConstants';

// Database & Storage
import {ax} from '../../services/axios';
import AsyncStorage from '@react-native-community/async-storage';


export default function MissionCard({id, cl_id, status, type, iconPath, missionName, starAmount, xpAmount, description, GetMissions, setToggleModal}){

    const [showDetails, setShowDetails] = useState(false);

    var cardDetails;
    var cardHeight;

    var cardBG;
    var textColor;
    var barBG;
    var bonusRibbon = null;
    var missionButton;

    // var toggleIcon = {
    //     'close': require('../../assets/imgs/close-box.png'),
    //     'expand': require('../../assets/imgs/expand-box.png')
    // }

	/*
	 *****************************************************************
	 *****************************************************************
    */

    // Status = 1 -> Available
    // Status = 2 -> In Progress
    // Status = 3 -> Completed

    // Start Mission -> Change status to 'In Progress'
    // From 1 to 2
    const StartMission = async()=>{
        var user_id = await AsyncStorage.getItem("user_id");
        user_id = parseInt(user_id);

        try {
            var start = await ax("completion_list_create", {mission_id:id, user_id:user_id, status:2});
            console.log("Start Mission: ", start)
        } catch (error){
            console.log("Error StartMission", error.message);
        }

        // console.log("StartMission Done");
        await GetMissions();
    }

    // Update Mission -> Change status to 'Completed'
    // From 2 to 3
    const UpdateMission = async()=>{
        if(!cl_id){
            return false;
        }

        try {
            var update = await ax("completion_list_update", {id:cl_id, status:3});
            console.log("Update Mission: ", update)
        } catch (error){
            console.log("Error UpdateMission", error.message);
        }

        // console.log("UpdateMission Done");
        await GetMissions();
    }

	/*
	 *****************************************************************
	 *****************************************************************
    */

    // Bonus Mission Card
    if(type === 2){
        // Available + In Progress Tab will display button
        if(status != 3){
            missionButton = (
                <View style={{left: -5}}>
                    <PurpleButton
                        title={status === 1 ? "Start Mission" : "Complete Mission"}
                        width={240} height={30} marginTop={20}
                        onPress={()=>{
                            // Available Tab
                            if(status === 1){
                                StartMission();
                                // Mission Started Modal
                                setToggleModal(true);
                            }

                            // In Progress Tab
                            if(status === 2){
                                console.log("Mission In Progress");
                                //console.log("Star Amount + XP: ", starAmount, xpAmount);

                                // Pass over following values
                                navigateTo.VerifyCode({
                                    starAmount,
                                    xpAmount,
                                    UpdateMission
                                });
                            }

                            // Close card after clicking button inside
                            setShowDetails(false);
                        }}/>
                </View>
            )
        } else {
            // Completed Tab will not display button
            missionButton = null;
        }

        cardBG = theme.darkGreen,
        textColor = theme.white,
        barBG = "#8AD560",
        bonusRibbon = (
            <Image
                style = {styles.bonusRibbon}
                source = {require('../../assets/imgs/bonus-ribbon.png')}
            />
        )
    }

    // Normal Mission Card
    if(type === 1){
        // Available + In Progress Tab will display button
        if(status != 3){
            missionButton = (
                <View style={{left: -5}}>
                    <GreenButton
                        title={status === 1 ? "Start Mission" : "Complete Mission"}
                        width={240} height={30} marginTop={20}
                        onPress={()=>{
                            // Available Tab
                            if(status === 1){
                                StartMission();
                                // Mission Started Modal
                                setToggleModal(true);
                            }

                            // In Progress Tab
                            if(status === 2){
                                console.log("Mission In Progress");
                                //console.log("Star Amount + XP: ", starAmount, xpAmount);

                                // Pass over following values
                                navigateTo.VerifyCode({
                                    starAmount,
                                    xpAmount,
                                    UpdateMission
                                });
                            }

                            // Close card after clicking button inside
                            setShowDetails(false);
                        }}/>
                </View>
            )
        } else {
            // Completed Tab will not display button
            missionButton = null;
        };

        cardBG = "#FAFAFA",
        textColor = theme.appBlack,
        barBG = "#DFF0D7",
        bonusRibbon = null;
    }

	/*
	 *****************************************************************
	 *****************************************************************
    */

    // Toggle Mission Card Details
    if (showDetails === true){
        // OPEN CARD
        cardDetails = (
            <View style={styles.cardDetailsContainer}>
                <Text style={[styles.missionDesc, {color: textColor}]}>{description}</Text>
                {missionButton}
            </View>
        );
        // toggleIcon = toggleIcon['close'];
    } else {
        // CLOSED CARD
        cardHeight = 105;    // Initial value
        cardDetails = null;
        // toggleIcon = toggleIcon['expand'];
    }

	/*
	 *****************************************************************
	 *****************************************************************
    */

    // UI
    return (
        <View style={styles.container}>
            {/* Mission Card */}
            {/* Entire card is clickable -> Show Details */}
            <TouchableOpacity activeOpacity={1} onPress={()=>{setShowDetails(!showDetails)}}>
                <View style={[styles.cardContainer, {backgroundColor: cardBG, height: cardHeight}]}>
                    {/* Bonus Ribbon */}
                    {bonusRibbon}

                    {/* Mission Icon */}
                    <Image
                        style = {styles.missionIcon}
                        source = {iconPath}
                    />

                    {/* Mission Details */}
                    <View style={styles.missionDetailContainer}>
                        {/* Mission Name */}
                        <Text style={[styles.missionName, {color: textColor}]}>{missionName}</Text>

                        {/* Rewards Bar - Star + XP */}
                        <RewardsBar
                            starAmount={starAmount}
                            xpAmount={xpAmount}
                            barBG={barBG}
                            textColor={textColor}
                        />

                        {/* Toggle Details */}
                        {cardDetails}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}