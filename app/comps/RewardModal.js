import React from 'react';
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
                    navigateTo.Home({starAmount, xpAmount})
                }}
            />
        </View>
    )
}