import React, {useState} from 'react';
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


    // Filtering Mission Cards based on its current status
    /*
        Reference to MissionData.js
        status: 1 = Available
        status: 2 = In Progress
        status: 3 = Completed
    */

    const [activeTab, setActiveTab] = useState("Available");
    const [allMissions, setMissions] = useState(missions);
    const [allBonusMissions, setBonusMissions] = useState(bonusMissions);

    var filterMissions = [];
    var filterBonusMissions = [];

    if (activeTab === "Available"){
        filterMissions = allMissions.filter(mission => mission.status === 1);
        filterBonusMissions = allBonusMissions.filter(bonusMission => bonusMission.status === 1);
    }

    if (activeTab === "In Progress"){
        filterMissions = allMissions.filter(mission => mission.status ===2);
        filterBonusMissions = allBonusMissions.filter(bonusMission => bonusMission.status ===2);
    }

    if (activeTab === "Completed"){
        filterMissions = allMissions.filter(mission => mission.status === 3);
        filterBonusMissions = allBonusMissions.filter(bonusMission => bonusMission.status === 3);
    }



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
                        // Filter Tab Menu
                        tab1 = "Available"
                        tab2 = "In Progress"
                        tab3 = "Completed"
                        setActiveTab = {setActiveTab}
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
                            filterMissions.map((obj, i)=>{
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