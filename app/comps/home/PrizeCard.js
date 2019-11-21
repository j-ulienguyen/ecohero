import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/PrizeCardStyles';
import theme from '../../styles/ThemeStyles';
import StarCount from '../StarCount';


export default function PrizeCard({imagePath, lockIconPath, starCount, prizeName, description, status, starColor, textColor, starCountColor}){

    // True = Unlocked
    if(status === true){
        starColor = "yellow"
        textColor = "black"
    }

    // False = Locked
    if(status === false){
        imagePath = require('../../assets/imgs/locked-prize.png')
        lockIconPath = require('../../assets/imgs/lock-icon.png')
        starColor = "gray"
        starCountColor = "#828282"
        textColor = theme.lightGray
    }

    // UI
    return (
        <View style={styles.container}>
            {/* Prize Card */}
            <View style={styles.cardContainer}>
                {/* Prize Icon */}
                <Image
                    style = {styles.prizeIcon}
                    source = {imagePath}
                />
                {/* Lock Icon */}
                <Image
                    style = {styles.lockIcon}
                    source = {lockIconPath}
                />

                {/* Star Count Requirement */}
                <View style={styles.starCountContainer}>
                    <StarCount type={starColor} starCount={starCount} textColor={starCountColor}/>
                </View>

                {/* Prize Details */}
                <View style={styles.prizeDetailContainer}>
                    {/* Prize Name */}
                    <Text style={[styles.prizeName, {color: textColor}]}>{prizeName}</Text>
                    {/* Prize Description */}
                    <Text style={[styles.prizeDesc, {color: textColor}]}>{description}</Text>
                </View>
            </View>
        </View>
    )
}