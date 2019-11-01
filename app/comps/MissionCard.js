import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionCardStyles';


export default function MissionCard(){
    // UI
    return (
        <View style={styles.container}>
            {/* Mission Card */}
            <View style={styles.cardContainer}>
                {/* Mission Icon */}
                <Image
                    style = {styles.missionIcon}
                    source = {require('../assets/imgs/recycle-icon.png')}
                />

                {/* Expand/Close Button */}
                <TouchableOpacity>
                    <Image
                        style = {styles.expandBtn}
                        source = {require('../assets/imgs/expand-box.png')}
                    />
                </TouchableOpacity>

                {/* Mission Details */}
                <View style={styles.missionDetailContainer}>
                    <Text style={styles.missionName}>Mission Name</Text>
                    {/* Rewards Bar */}
                    <View style={styles.rewardsContainer}>
                        <Text style={styles.rewardsHeading}>Rewards</Text>

                        {/* Star Reward Amount */}
                        <View style={styles.starAmountContainer}>
                            {/* Star Amount # */}
                            <Text style={styles.starAmount}>20</Text>
                            <Image
                                style = {styles.starIcon}
                                source = {require('../assets/imgs/star-icon.png')}
                            />
                        </View>

                        {/* XP Reward Amount */}
                        <Text style={styles.xpText}>50 XP</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}