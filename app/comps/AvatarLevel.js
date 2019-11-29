import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/AvatarLevelStyles';

// Navigation
import * as navigateTo from '../../RouteConstants';


export default function AvatarLevel({avatarPath, level, onPress, disabled}){
    // UI
    return (
        <View style={styles.avatar}>
            {/* Avatar Image */}
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={disabled}>
                <Image
                    style = {styles.avatarIcon}
                    resizeMode = "contain"
                    source = {avatarPath}
                />
            </TouchableOpacity>

            <View style={styles.levelContainer}>
                {/* Level Badge */}
                <Image
                    style = {styles.levelBadge}
                    source = {require('../assets/imgs/level-badge.png')}
                />
                {/* Level # */}
                <Text style={styles.levelText}>{level}</Text>
            </View>
        </View>
    )
}