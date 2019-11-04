import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/BonusMissionCardStyles';
import BonusRewardsBar from './BonusRewardsBar';


export default function BonusMissionCard(){
    // UI
    return (
        <View style={styles.container}>
            {/* Bonus Mission Card */}
            <View style={styles.cardContainer}>
                {/* Bonus Ribbon */}
                <Image
                    style = {styles.bonusRibbon}
                    source = {require('../../assets/imgs/bonus-ribbon.png')}
                />

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
                    {/* Bonus Rewards Bar - Star + XP */}
                    <BonusRewardsBar/>
                </View>
            </View>
        </View>
    )
}