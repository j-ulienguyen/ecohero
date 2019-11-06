import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../styles/RewardModalStyles';
import RewardsBar from './missions/RewardsBar';
import GreenButton from '../comps/GreenButton';
import theme from '../styles/ThemeStyles';


export default function RewardModal(props){
    // UI
    return (
        <View style={styles.container}>
            <Text style={styles.mainHeading}>{props.heading}</Text>
            <Text style={styles.description}>{props.description}</Text>

            {/* Reward Image */}
            <Image
                style = {styles.rewardImage}
                source = {props.imagePath}
            />

            {/* You Earned - Rewards Bar */}
            <Text style={styles.earnedText}>You Earned</Text>
            <RewardsBar
                barBG="#DFF0D7"
                starAmount={props.starAmount}
                xpAmount={props.xpAmount}
            />

            {/* Redeem Button */}
            <GreenButton title="Done" width={309} height={43} marginTop={50}/>
        </View>
    )
}