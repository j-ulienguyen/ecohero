import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/RewardsBarStyles';


export default function RewardsBar(props){
    // UI
    return (
        <View>
            <View style={[styles.rewardsContainer, {backgroundColor: props.barBG}]}>
                <Text style={[styles.rewardsHeading, {color: props.textColor}]}>Rewards</Text>

                {/* Star Reward Amount */}
                <View style={styles.starAmountContainer}>
                    {/* Star Amount # */}
                    <Text style={[styles.starAmount, {color: props.textColor}]}>{props.starAmount}</Text>
                    <Image
                        style = {styles.starIcon}
                        source = {require('../../assets/imgs/star-icon.png')}
                    />
                </View>

                {/* XP Reward Amount */}
                <Text style={[styles.xpText, {color: props.textColor}]}>{props.xpAmount} XP</Text>
            </View>
        </View>
    )
}