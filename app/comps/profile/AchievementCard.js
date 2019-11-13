import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/AchievementCardStyles';


export default function AchievementCard({cardBG, countBG, count, imagePath, name, description}){
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
                    <Text style={styles.achievementName}>{name}</Text>
                    {/* Achievement Description */}
                    <Text style={styles.achievementDesc}>{description}</Text>
                </View>
            </View>
        </View>
    )
}