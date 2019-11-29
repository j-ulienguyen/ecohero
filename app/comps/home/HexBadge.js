import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/HexBadgeStyles';


export default function HexBadge({type, badgePath, label, count, onPress}){

    var badgeLabel;

    if(type === "image"){
        badgeLabel = (<Image source = {badgePath}/>)
    }

    if(type === "text"){
        badgeLabel = (<Text style={styles.missionLabel}>{label}</Text>)
    }


    // UI
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
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
        </TouchableOpacity>
    )
}