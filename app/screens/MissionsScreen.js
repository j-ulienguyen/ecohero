import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionsScreenStyles';
import PatternBG from '../comps/PatternBG';
import MissionBoardCard from '../comps/missions/MissionBoardCard';
import MissionCard from '../comps/missions/MissionCard';
import NavBar from '../comps/NavBar';

// Import data files below
// import {missions, bonusMissions} from '../data/MissionData';
import missions from '../data/MissionData';
// import bonusMissions from '../data/BonusMissionData';


export default function MissionsScreen(){

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
                        {/* <MissionCard
                            type="bonus"
                            missionName = "Bonus Mission"
                            description = "Bonus mission details here"
                            iconPath={require('../assets/imgs/recycle-icon.png')}
                            starAmount={5}
                            xpAmount={50}
                        /> */}

                        {/* <MissionCard
                            type = "bonus"
                            missionName = {bonusMissions.name[2]}
                            description = {bonusMissions.description[2]}
                            iconPath = {bonusMissions.iconPath[2]}
                            starAmount = {bonusMissions.starAmount[2]}
                            xpAmount = {bonusMissions.xpAmount[2]}
                        /> */}

                        {/* Populate with Mission Card from MissionData.js */}
                        {
                            missions.map((obj, i)=>{
                                return <MissionCard
                                    key = {i}
                                    type = "normal"
                                    missionName = {obj.name}
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