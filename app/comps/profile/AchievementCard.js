import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/AchievementCardStyles';
import theme from '../../styles/ThemeStyles';


export default function AchievementCard({cardBG, countBG, count, imagePath, heading, description, type}){

    // Total Stars - Achievement Card
    if (type === "totalStars"){
        cardBG = theme.darkGreen
        countBG = "#8AD560"
        imagePath = require('../../assets/imgs/star-icon.png')
        heading = "Total Stars"
        description = "All of the stars that you have earned so far on EcoHero"
    }

    // Completed Missions - Achievement Card
    if (type === "completedMissions"){
        cardBG = "#7FC6E4"
        countBG = "#95D5EC"
        imagePath = require('../../assets/imgs/complete-mission-icon.png')
        heading = "Completed Missions"
        description = "All of the missions that you have completed so far on EcoHero"
    }


    // UI
    return (
        <View style={styles.container}>
            {/* Achievement Card */}
            <View style={[styles.cardContainer, {backgroundColor: cardBG}]}>
                {/* Achievement Count */}
                <View style={[styles.countContainer, {backgroundColor: countBG}]}>
                    {/* Count # */}
                    <Text style={styles.countText}>{count}</Text>
                    {/* Icon */}
                    <Image source = {imagePath}/>
                </View>

                {/* Achievement Details */}
                <View style={styles.achievementDetailContainer}>
                    {/* Achievement Name */}
                    <Text style={styles.achievementName}>{heading}</Text>
                    {/* Achievement Description */}
                    <Text style={styles.achievementDesc}>{description}</Text>
                </View>
            </View>
        </View>
    )
}