import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/ProfileBadgeStyles';

// Navigation
import * as navigateTo from '../../../RouteConstants';


export default function ProfileBadge({badgeName, badgeState, imagePath, disabled, onPress, description}){

    var badge;

    // True = Unlocked
    if(badgeState === true){
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

    // False = Locked
    if(badgeState === false){
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
            <TouchableOpacity disabled={disabled} onPress={()=>{
                navigateTo.BadgeModal({badgeName, description, imagePath});
            }}>
                {badge}
            </TouchableOpacity>
        </View>
    );
}
