import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/HexBadgeStyles';


export default function HexBadge({type, badgePath, label, count}){

    var badgeLabel;

    if(type === "image"){
        badgeLabel = (<Image source = {badgePath}/>)
    }

    if(type === "text"){
        badgeLabel = (<Text style={styles.missionLabel}>{label}</Text>)
    }


    // UI
    return (
        <View style={styles.hexBadgeContainer}>
            <Image
                style = {styles.hexBadge}
                source = {require('../../assets/imgs/hex-badge.png')}
            />
            <View style={styles.hexBadgeContent}>
                <Text style={styles.countText}>{count}</Text>
                {badgeLabel}
            </View>
        </View>
    )
}