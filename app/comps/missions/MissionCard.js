import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/MissionCardStyles';
import theme from '../../styles/ThemeStyles';
import RewardsBar from './RewardsBar';


export default function MissionCard({type, iconPath, missionName, starAmount, xpAmount}){

    var cardBG;
    var textColor;
    var barBG;
    var bonusRibbon = null;

    // Bonus Mission Card
    if(type === "bonus"){
        cardBG = theme.darkGreen,
        textColor = theme.white,
        barBG = "#8AD560",
        bonusRibbon = (
            <Image
                style = {styles.bonusRibbon}
                source = {require('../../assets/imgs/bonus-ribbon.png')}
            />
        )
    }

    // Normal Mission Card
    if(type === "normal"){
        cardBG = "#FAFAFA",
        textColor = theme.appBlack,
        barBG = "#DFF0D7",
        bonusRibbon = null
    }


    // UI
    return (
        <View style={styles.container}>
            {/* Mission Card */}
            <View style={[styles.cardContainer, {backgroundColor: cardBG}]}>
                {/* Bonus Ribbon */}
                {bonusRibbon}

                {/* Mission Icon */}
                <Image
                    style = {styles.missionIcon}
                    source = {iconPath}
                />

                {/* Expand/Close Button */}
                <TouchableOpacity>
                    <Image
                        style = {styles.expandBtn}
                        source = {require('../../assets/imgs/expand-box.png')}
                    />
                </TouchableOpacity>

                {/* Mission Details */}
                <View style={styles.missionDetailContainer}>
                    <Text style={[styles.missionName, {color: textColor}]}>{missionName}</Text>
                    {/* Rewards Bar - Star + XP */}
                    <RewardsBar
                        starAmount={starAmount}
                        xpAmount={xpAmount}
                        barBG={barBG}
                        textColor={textColor}
                    />
                </View>
            </View>
        </View>
    )
}