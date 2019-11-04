import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/MissionCardStyles';
import RewardsBar from './RewardsBar';


export default function MissionCard(){
    // UI
    return (
        <View style={styles.container}>
            {/* Mission Card */}
            <View style={styles.cardContainer}>
                {/* Mission Icon */}
                <Image
                    style = {styles.missionIcon}
                    source = {require('../../assets/imgs/recycle-icon.png')}
                />

                {/* Expand/Close Button */}
                <TouchableOpacity>
                    <Image
                        style = {styles.expandBtn}
                        source = {require('../../assets/imgs/expand-box.png')}
                    />
                </TouchableOpacity>

                {/* Mission Details */}
                <View style={styles.missionDetailContainer}>
                    <Text style={styles.missionName}>Mission Name</Text>
                    {/* Rewards Bar - Star + XP */}
                    <RewardsBar/>
                </View>
            </View>
        </View>
    )
}