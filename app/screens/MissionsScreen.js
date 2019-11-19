import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionsScreenStyles';
import PatternBG from '../comps/PatternBG';
import MissionBoardCard from '../comps/missions/MissionBoardCard';
import MissionCard from '../comps/missions/MissionCard';
import NavBar from '../comps/NavBar';

// Import data files below
import {missions, bonusMissions} from '../data/MissionData';
import {ax} from '../services/axios';


export default function MissionsScreen(){

    /*
    For referece, if we only want to display a certain amount of items from array
        1. var m = missions.slice(0,#);
        2. m.map((obj, i)) ...
    */


    // Randomize index number to display one Bonus Mission Card
    // var randomIndex = Math.floor(Math.random() * bonusMissions.length) + 0;
    // var randomBonus = bonusMissions[randomIndex];
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

    // Normal Missions
    // const [allMissions, setMissions] = useState(missions);
    const [allMissions, setMissions] = useState([]);

    // Bonus Missions
    // const [allBonusMissions, setBonusMissions] = useState(bonusMissions);
    // var filterMissions = [];
    // var filterBonusMissions = [];

    // Only display 1 bonus mission
    // var bonusMission = allBonusMissions.slice(0,1);


    const GetMissions = async()=>{
        var missions = await ax("missions_read", {});
        setMissions(missions);
    }

    useEffect(()=>{
        GetMissions();
    }, [])


    // filterMissions = allMissions;

    // if (activeTab === "Available"){
    //     filterMissions = allMissions.filter(mission => mission.status === 1);
    //     filterBonusMissions = allBonusMissions.filter(bonusMission => bonusMission.status === 1);
    // }

    // if (activeTab === "In Progress"){
    //     filterMissions = allMissions.filter(mission => mission.status ===2);
    //     filterBonusMissions = allBonusMissions.filter(bonusMission => bonusMission.status ===2);
    // }

    // if (activeTab === "Completed"){
    //     filterMissions = allMissions.filter(mission => mission.status === 3);
    //     filterBonusMissions = allBonusMissions.filter(bonusMission => bonusMission.status === 3);
    // }



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
                        {/* <MissionCard
                            type = "bonus"
                            missionName = {randomBonus.missionName}
                            description = {randomBonus.description}
                            iconPath = {randomBonus.iconPath}
                            starAmount = {randomBonus.starAmount}
                            xpAmount = {randomBonus.xpAmount}
                        /> */}

                        {/* <MissionCard
                            type = "bonus"
                            missionName = {bonusMissions[0].missionName}
                            description = {bonusMissions[0].description}
                            iconPath = {bonusMissions[0].iconPath}
                            starAmount = {bonusMissions[0].starAmount}
                            xpAmount = {bonusMissions[0].xpAmount}
                            status = {bonusMissions[0].status}
                        /> */}

                        {
                            filterBonusMissions.map((obj, i)=>{
                                return <MissionCard
                                    key = {i}
                                    type = "bonus"
                                    missionName = {obj.missionName}
                                    description = {obj.description}
                                    iconPath = {obj.iconPath}
                                    starAmount = {obj.starAmount}
                                    xpAmount = {obj.xpAmount}
                                />
                            })
                        }

                        {/* Populate with Mission Card from MissionData.js */}
                        {
                            allMissions.map((obj, i)=>{
                                return <MissionCard
                                    key = {i}
                                    type = "normal"
                                    missionName = {obj.mission_name}
                                    description = {obj.mission_description}
                                    iconPath = {missions[0].iconPath}
                                    starAmount = {obj.mission_star}
                                    xpAmount = {obj.mission_xp}
                                    //setMissions = {setMissions}
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