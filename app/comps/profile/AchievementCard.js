import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../styles/AchievementCardStyles';


export default function AchievementCard(){
    // UI
    return (
        <View style={styles.container}>
            {/* Achievement Card */}
            <View style={styles.cardContainer}>
                {/* Achievement Count */}
                <View style={styles.countContainer}>
                    {/* Count # */}
                    <Text style={styles.countText}>99</Text>
                    {/* Icon */}
                    <Image
                        style = {styles.achievementIcon}
                        source = {require('../assets/imgs/complete-mission-icon.png')}
                    />
                </View>

                {/* Achievement Details */}
                <View style={styles.achievementDetailContainer}>
                    {/* Achievement Name */}
                    <Text style={styles.achievementName}>Total Stars</Text>
                    {/* Achievement Description */}
                    <Text style={styles.achievementDesc}>All of the stars that you have earned so far on EcoHero</Text>
                </View>
            </View>
        </View>
    )
}