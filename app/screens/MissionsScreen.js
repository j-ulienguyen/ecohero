import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionsScreenStyles';
import PatternBG from '../comps/PatternBG';
import MissionBoardCard from '../comps/missions/MissionBoardCard';
import MissionCard from '../comps/missions/MissionCard';
import NavBar from '../comps/NavBar';

// Import data files below ***TEMPORARY***
import {missions} from '../data/MissionData';

// Database & Storage
import {ax} from '../services/axios';
// import AsyncStorage from '@react-native-community/async-storage';


export default function MissionsScreen(){

    // Filter Tab Menu
    const [activeTab, setActiveTab] = useState("Available");

    // Normal Missions
    const [allMissions, setMissions] = useState([]);


    // Load all missions from db
    const GetMissions = async()=>{
        var missions = await ax("missions_read", {});
        setMissions(missions);
    }

    useEffect(()=>{
        GetMissions();
    }, [])


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