import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/ProfileBadgeStyles';


export default function ProfileBadge({badgeState, imagePath, disabled}){

    var badge;

    if(badgeState === "unlocked"){
        badge = (
            <View style={styles.badgeContainer}>
                {/* Badge Icon */}
                <Image
                    style = {styles.badge}
                    source = {imagePath}
                />
            </View>
        )
    }

    if(badgeState === "locked"){
        badge = (
            <View style={styles.badgeContainer}>
                {/* Badge Icon */}
                <Image
                    style = {styles.badge}
                    source = {require('../../assets/imgs/locked-badge.png')}
                />
                {/* Lock Icon */}
                <Image
                    style = {styles.lockIcon}
                    source = {require('../../assets/imgs/lock-icon.png')}
                />
            </View>
        )
    }

    // UI
    return (
        <View style={styles.container}>
            <TouchableOpacity disabled={disabled}>
                {badge}
            </TouchableOpacity>
        </View>
    );
}
