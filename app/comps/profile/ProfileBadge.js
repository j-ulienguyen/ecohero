import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/ProfileBadgeStyles';

export default function ProfileBadge(){
    // UI
    return (
        <View style={styles.container}>
            {/* Leaf Badge */}
            <Image 
            style={styles.badge}
            source= {require("../../assets/imgs/eco-badge.png")}
            />

        </View>
    );
}
