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


export default function MissionCard({id, cl_id, status, type, iconPath, missionName, starAmount, xpAmount, description, GetMissions}){

    const [showDetails, setShowDetails] = useState(false);

    var cardDetails;
    var cardHeight;

    var cardBG;
    var textColor;
    var barBG;
    var bonusRibbon = null;
    var missionButton;

    var toggleIcon = {
        'close': require('../../assets/imgs/close-box.png'),
        'expand': require('../../assets/imgs/expand-box.png')
    }


    // Store Mission ID
    // var StoreMissionID = async(id)=>{
    //     try {
    //         await AsyncStorage.setItem("mission_id", JSON.stringify(id));
    //         console.log("Store MissionID: ", id)
    //     } catch (error){
    //         console.log("Error saving data");
    //     }
    //     console.log("End of StoreMissionID");
    // }

    // Start Mission -> Change status to 'In Progress'
    const StartMission = async()=>{
        // Get user_id from AsyncStorage
        var user_id = await AsyncStorage.getItem("user_id");

        try {
            var start = await ax("completion_list_create", {mission_id:id, user_id:user_id, status:2});
            console.log("Start Mission: ", start)
        } catch (error){
            console.log("Error StartMission");
        }

        console.log("StartMission Done");
        await GetMissions();
    }

    // Update Mission -> Change status to 'Completed'
    const UpdateMission = async()=>{
        if(!cl_id){
            return false;
        }
        try {
            var update = await ax("completion_list_update", {id:cl_id, status:3});
            console.log("Update Mission: ", update)
        } catch (error){
            console.log("Error UpdateMission");
        }

        console.log("UpdateMission Done");
        await GetMissions();
    }


    // const ReadMissionRewards = async()=>{
    //     try {
    //         var reward = await ax("missions_read", {id, mission_star, mission_xp});
    //         console.log("ReadMissionRewards: ", reward)
    //     } catch (error){
    //         console.log("Error ReadMissionRewards");
    //     }

    //     console.log("ReadMissionRewards Done");
    //     await GetMissions();
    // }


    // Bonus Mission Card
    // if(type === "bonus"){
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
                            }
                            // In Progress Tab
                            if(status === 2){
                                console.log("Star Amount + XP: ", starAmount, xpAmount);
                                // Pass over following values
                                navigateTo.VerifyCode({
                                    starAmount,
                                    xpAmount,
                                    UpdateMission
                                });
                            }
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
    // if(type === "normal"){
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
                            }
                            // In Progress Tab
                            if(status === 2){
                                console.log("Star Amount + XP: ", starAmount, xpAmount);
                                // Pass over following values
                                navigateTo.VerifyCode({
                                    starAmount,
                                    xpAmount,
                                    UpdateMission
                                });
                            }
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


    // Toggle Mission Card Details
    if (showDetails === true){
        // OPEN CARD
        cardDetails = (
            <View style={styles.cardDetailsContainer}>
                <Text style={[styles.missionDesc, {color: textColor}]}>{description}</Text>
                {missionButton}
            </View>
        );
        toggleIcon = toggleIcon['close'];
    } else {
        // CLOSED CARD
        cardHeight = 105;    // Initial value
        cardDetails = null;
        toggleIcon = toggleIcon['expand'];
    }


    // UI
    return (
        <View style={styles.container}>
            {/* Mission Card */}
            <View style={[styles.cardContainer, {backgroundColor: cardBG, height: cardHeight}]}>
                {/* Bonus Ribbon */}
                {bonusRibbon}

                {/* Mission Icon */}
                <Image
                    style = {styles.missionIcon}
                    source = {iconPath}
                />

                {/* Expand/Close Button */}
                <TouchableOpacity
                    style = {styles.toggleBtn}
                    onPress = {()=>{
                        setShowDetails(!showDetails);
                    }}
                >
                    <Image source={toggleIcon}/>
                </TouchableOpacity>

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
        </View>
    )
}