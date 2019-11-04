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
                    <Text style={styles.countText}>{props.count}</Text>
                    {/* Icon */}
                    <Image
                        style = {styles.achievementIcon}
                        source = {props.imagePath}
                    />
                </View>

                {/* Achievement Details */}
                <View style={styles.achievementDetailContainer}>
                    {/* Achievement Name */}
                    <Text style={styles.achievementName}>{props.name}</Text>
                    {/* Achievement Description */}
                    <Text style={styles.achievementDesc}>{props.description}</Text>
                </View>
            </View>
        </View>
    )
}