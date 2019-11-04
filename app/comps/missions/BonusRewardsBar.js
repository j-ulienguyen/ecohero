import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/BonusRewardsBarStyles';


export default function BonusRewardsBar(){
    // UI
    return (
        <View>
            <View style={styles.rewardsContainer}>
                <Text style={styles.rewardsHeading}>Rewards</Text>

                {/* Star Reward Amount */}
                <View style={styles.starAmountContainer}>
                    {/* Star Amount # */}
                    <Text style={styles.starAmount}>20</Text>
                    <Image
                        style = {styles.starIcon}
                        source = {require('../../assets/imgs/star-icon.png')}
                    />
                </View>

                {/* XP Reward Amount */}
                <Text style={styles.xpText}>50 XP</Text>
            </View>
        </View>
    )
}