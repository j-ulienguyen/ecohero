import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../styles/AvatarLevelStyles';


export default function AvatarLevel(props){
    // UI
    return (
        <View style={styles.avatar}>
            {/* Avatar Image */}
            <Image
                style = {styles.avatarIcon}
                resizeMode = "contain"
                source = {props.avatarPath}
            />

            <View style={styles.levelContainer}>
                {/* Level Badge */}
                <Image
                    style = {styles.levelBadge}
                    source = {require('../assets/imgs/level-badge.png')}
                />
                {/* Level # */}
                <Text style={styles.levelText}>{props.level}</Text>
            </View>
        </View>
    )
}