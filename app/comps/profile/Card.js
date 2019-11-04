import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/AchievementCardStyles';


export default function AchievementCard(props){
    // UI
    return (
        <View style={styles.container}>
            {/* Achievement Card */}
            <View style={styles.cardContainer}>
                {/* Achievement Count */}
                <View style={styles.countContainer}>
                    {/* Count # */}
                    <Text style={styles.countText}>{props.countText}</Text>
                    {/* Icon */}
                    <Image
                        style = {styles.achievementIcon}
                        source = {require('../../assets/imgs/complete-mission-icon.png')}
                    />
                </View>

                {/* Achievement Details */}
                <View style={styles.achievementDetailContainer}>
                    {/* Achievement Name */}
                    <Text style={styles.achievementName}>{props.achievementName}</Text>
                    {/* Achievement Description */}
                    <Text style={styles.achievementDesc}>{props.achievementDesc}</Text>
                </View>
            </View>
        </View>
    )
}