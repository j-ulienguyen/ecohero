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

export default function MissionCard({id, cl_id, status, type, iconPath, missionName, starAmount, xpAmount, description,GetMissions}){

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

    const StartMission = async()=>{
        // getitem userid

        try {
            var start = await ax("completion_list_create", {mission_id:id, user_id:15, status:2});
            console.log("Start Mission: ", start)
        } catch (error){
            console.log("Error StartMission");
        }
        console.log("StartMission Done");
        await GetMissions();
    }

    const UpdateMission = async()=>{
        if(!cl_id){
            return false;
        }
        try {
            var start = await ax("completion_list_update", {id:cl_id, status:3});
            console.log("Update Mission: ", start)
        } catch (error){
            console.log("Error UpdateMission");
        }
        console.log("UpdateMission Done");
        await GetMissions();
    }


    // Bonus Mission Card
    if(type === "bonus"){
        cardBG = theme.darkGreen,
        textColor = theme.white,
        barBG = "#8AD560",
        missionButton = (
            <View style={{left: -5}}>
                <PurpleButton
                    title="Start Mission"
                    width={240} height={30} marginTop={20}
                    onPress={()=>{
                        navigateTo.VerifyCode();
                    }}
                />
            </View>
        ),
        bonusRibbon = (
            <Image
                style = {styles.bonusRibbon}
                source = {require('../../assets/imgs/bonus-ribbon.png')}
            />
        )
    }

    // Normal Mission Card
    if(type === "normal"){
        cardBG = "#FAFAFA",
        textColor = theme.appBlack,
        barBG = "#DFF0D7",
        missionButton = (
            <View style={{left: -5}}>
                <GreenButton
                    title={status===1?"Start Mission":"Complete"}
                    width={240} height={30} marginTop={20}
                    onPress={()=>{
                        if(status === 1){
                            StartMission();
                        }
                        if(status === 2){
                            UpdateMission();
                        }
                        if(status === 3){
                            // Function
                        }

                    }}/>
            </View>
        ),
        bonusRibbon = null
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
                    <Text style={[styles.missionName, {color: textColor}]}>{missionName} {status}</Text>

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