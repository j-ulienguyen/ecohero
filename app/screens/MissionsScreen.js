import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionsScreenStyles';
import PatternBG from '../comps/PatternBG';
import MissionBoardCard from '../comps/missions/MissionBoardCard';
import MissionCard from '../comps/missions/MissionCard';
import NavBar from '../comps/NavBar';

// Import data files below
import {missions, bonusMissions} from '../data/MissionData';


export default function MissionsScreen(){

    /*
    For referece, if we only want to display a certain amount of items from array
        1. var m = missions.slice(0,#);
        2. m.map((obj, i)) ...
    */


    // Randomize index number to display one Bonus Mission Card
    var randomIndex = Math.floor(Math.random() * bonusMissions.length) + 0;
    var randomBonus = bonusMissions[randomIndex];

    // console.log("Bonus Mission Array Length: ", bonusMissions.length);
    // console.log("Random index: ", randomIndex);


    // UI
    return (
        <View style={styles.container}>
            {/* Fixed Pattern BG */}
            <PatternBG/>

            {/* Scrollable Content - On Top */}
            <ScrollView>
                <View>
                    {/* Mission Board Card */}
                    <MissionBoardCard
                        missionStatement='“Our mission is to recycle and maintain a clean environment”'
                    />

                    {/* Mission Card Section */}
                    <View style={styles.cardSection}>
                        {/* Bonus Mission Card - Randomize */}
                        <MissionCard
                            type = "bonus"
                            missionName = {randomBonus.missionName}
                            description = {randomBonus.description}
                            iconPath = {randomBonus.iconPath}
                            starAmount = {randomBonus.starAmount}
                            xpAmount = {randomBonus.xpAmount}
                        />

                        {/* Populate with Mission Card from MissionData.js */}
                        {
                            missions.map((obj, i)=>{
                                return <MissionCard
                                    key = {i}
                                    type = "normal"
                                    missionName = {obj.missionName}
                                    description = {obj.description}
                                    iconPath = {obj.iconPath}
                                    starAmount = {obj.starAmount}
                                    xpAmount = {obj.xpAmount}
                                />
                            })
                        }
                    </View>
                </View>
            </ScrollView>

            {/* Navigation Bar */}
            <NavBar currentScreen="MissionsScreen"/>
        </View>
    )
}