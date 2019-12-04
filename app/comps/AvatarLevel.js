import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';

// Import comps & styles below
import styles from '../styles/AvatarLevelStyles';
import theme from '../styles/ThemeStyles';


export default function AvatarLevel({avatarPath, level, onPress, disabled, progressCircle}){
    // UI
    return (
        <View style={styles.avatar}>
            <Progress.Circle
                style={styles.progressCircle}
                size={114}
                thickness={6}
                progress={progressCircle}
                animated={true}
                color={theme.yellowGold}
                unfilledColor="white"
                borderWidth={0}
                borderColor="white"
            />

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