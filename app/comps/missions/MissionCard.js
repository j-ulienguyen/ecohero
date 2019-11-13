import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/MissionCardStyles';
import theme from '../../styles/ThemeStyles';
import RewardsBar from './RewardsBar';
import GreenButton from '../GreenButton';
import PurpleButton from '../PurpleButton';


export default function MissionCard({type, iconPath, missionName, starAmount, xpAmount}){

    const [showDetails, setShowDetails] = useState(false);

    var cardDetails;
    var cardHeight;

    var cardBG;
    var textColor;
    var barBG;
    var bonusRibbon = null;

    var toggleIcon = {
        'close': require('../../assets/imgs/close-box.png'),
        'expand': require('../../assets/imgs/expand-box.png')
    }


    // Bonus Mission Card
    if(type === "bonus"){
        cardBG = theme.darkGreen,
        textColor = theme.white,
        barBG = "#8AD560",
        missionButton = (
            <PurpleButton title="Start Mission" width={240} height={30} marginTop={25}/>
        ),
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
        missionButton = (
            <GreenButton title="Start Mission" width={240} height={30} marginTop={25}/>
        ),
        bonusRibbon = null
    }


    // Toggle Mission Card Details
    if (showDetails === true){
        // OPEN CARD
        cardDetails = (
            <View>
                <Text style={[styles.missionDesc, {color: textColor}]}>Create a movement and purpose in taking part of removing litter in our daily community. Let’s help our neighbourhoods feel safe and vibrant again! To fulfill this mission you must pick up two garbage bags of litter.</Text>

                {missionButton}
            </View>
        );
        toggleIcon = toggleIcon['close'];
    } else {
        // CLOSED CARD
        cardHeight = 105;    // Initial value
        cardDetails = null;
        toggleIcon = toggleIcon['expand'];
    }


    // UI
    return (
        <View style={styles.container}>
            {/* Mission Card */}
            <View style={[styles.cardContainer, {backgroundColor: cardBG, height: cardHeight}]}>
                {/* Bonus Ribbon */}
                {bonusRibbon}

                {/* Mission Icon */}
                <Image
                    style = {styles.missionIcon}
                    source = {iconPath}
                />

                {/* Expand/Close Button */}
                <TouchableOpacity
                    style = {styles.toggleBtn}
                    onPress = {()=>{
                        setShowDetails(!showDetails);
                    }}
                >
                    <Image source={toggleIcon}/>
                </TouchableOpacity>

                {/* Mission Details */}
                <View style={styles.missionDetailContainer}>
                    {/* Mission Name */}
                    <Text style={[styles.missionName, {color: textColor}]}>{missionName}</Text>

                    {/* Rewards Bar - Star + XP */}
                    <RewardsBar
                        starAmount={starAmount}
                        xpAmount={xpAmount}
                        barBG={barBG}
                        textColor={textColor}
                    />

                    {/* Toggle Details */}
                    {cardDetails}
                </View>
            </View>
        </View>
    )
}