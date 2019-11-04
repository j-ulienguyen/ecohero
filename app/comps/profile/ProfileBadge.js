import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/ProfileBadgeStyles';


export default function ProfileBadge(props){

    var badge;

    if(props.badgeState === "unlocked"){
        badge = (
            <View style={styles.badgeContainer}>
                {/* Badge Icon */}
                <Image
                    style = {styles.badge}
                    source = {props.imagePath}
                />
            </View>
        )
    }

    if(props.badgeState === "locked"){
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
            <TouchableOpacity disabled={props.disabled}>
                {badge}
            </TouchableOpacity>
        </View>
    );
}
