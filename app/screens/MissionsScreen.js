import React from 'react';
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

    // var m = missions.slice(0,2);


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
                        <MissionCard
                            type = "bonus"
                            missionName = {bonusMissions[0].missionName}
                            description = {bonusMissions[0].description}
                            iconPath = {bonusMissions[0].iconPath}
                            starAmount = {bonusMissions[0].starAmount}
                            xpAmount = {bonusMissions[0].xpAmount}
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
            <NavBar/>
        </View>
    )
}