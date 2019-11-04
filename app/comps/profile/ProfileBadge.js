import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/ProfileBadgeStyles';


export default function ProfileBadge(){

    /*
    + When a badge is locked 'Badge Icon' will be 'locked-badge.png' and the lock icon will display
    */


    // UI
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.badgeContainer}>
                    {/* Badge Icon */}
                    <Image
                        style = {styles.badge}
                        source = {require("../../assets/imgs/eco-badge.png")}
                    />
                    {/* Lock Icon */}
                    {/* <Image
                        style = {styles.lockIcon}
                        source = {require("../../assets/imgs/lock-icon.png")}
                    /> */}
                </View>
            </TouchableOpacity>
        </View>
    );
}
