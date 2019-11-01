import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/RewardModalStyles';
import RewardsBar from './RewardsBar';


export default function RewardModal(){
    // UI
    return (
        <View style={styles.container}>
            <Text style={styles.mainHeading}>Woo-hoo!</Text>
            <Text style={styles.description}>Thank you for joining EcoHero. Please accept these rewards as a token of appreciation</Text>

            {/* Reward Image */}
            <Image
                style = {styles.rewardImage}
                source = {require('../assets/imgs/star-reward.png')}
            />

            {/* You Earned - Rewards Bar */}
            <Text style={styles.earnedText}>You Earned</Text>
            <RewardsBar/>

            {/* Redeem Button */}
            <View style={{backgroundColor: "green", width: 250,height: 50, marginTop: 30}}></View>
        </View>
    )
}