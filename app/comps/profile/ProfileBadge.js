import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/ProfileBadgeStyles';


export default function ProfileBadge(props){

    /*
    + When a badge is locked 'Badge Icon' will be 'locked-badge.png' and the lock icon will display
    */


    // UI
    return (
        <View style={styles.container}>
            <TouchableOpacity disabled={props.disabled}>
                <View style={styles.badgeContainer}>
                    {/* Badge Icon */}
                    <Image
                        style = {styles.badge}
                        source = {props.imagePath}
                    />
                    {/* Lock Icon */}
                    <Image
                        style = {styles.lockIcon}
                        source = {props.lockIcon}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}
