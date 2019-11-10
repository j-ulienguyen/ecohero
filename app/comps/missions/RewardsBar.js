import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/RewardsBarStyles';


export default function RewardsBar({barBG, textColor, starAmount, xpAmount}){
    // UI
    return (
        <View>
            <View style={[styles.rewardsContainer, {backgroundColor: barBG}]}>
                <Text style={[styles.rewardsHeading, {color: textColor}]}>Rewards</Text>

                {/* Star Reward Amount */}
                <View style={styles.starAmountContainer}>
                    {/* Star Amount # */}
                    <Text style={[styles.starAmount, {color: textColor}]}>{starAmount}</Text>
                    <Image
                        style = {styles.starIcon}
                        source = {require('../../assets/imgs/star-icon.png')}
                    />
                </View>

                {/* XP Reward Amount */}
                <Text style={[styles.xpText, {color: textColor}]}>{xpAmount} XP</Text>
            </View>
        </View>
    )
}