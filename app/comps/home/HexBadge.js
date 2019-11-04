import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/HexBadgeStyles';


export default function HexBadge(props){

    var badgeLabel;

    if(props.type === "image"){
        badgeLabel = (<Image source = {props.badgePath}/>)
    }

    if(props.type === "text"){
        badgeLabel = (<Text style={styles.missionLabel}>{props.label}</Text>)
    }


    // UI
    return (
        <View style={styles.hexBadgeContainer}>
            <Image
                style = {styles.hexBadge}
                source = {require('../../assets/imgs/hex-badge.png')}
            />
            <View style={styles.hexBadgeContent}>
                <Text style={styles.countText}>{props.count}</Text>
                {badgeLabel}
            </View>
        </View>
    )
}