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
        //var user_id = asyncsto
        var missions = await ax("missions_read", {user_id:15});

        
        setMissions(missions);
    }
    
var missions = allMissions;

    if (activeTab === "Available"){
        missions = allMissions.filter((o, i)=>{
            return !o.status || o.status === 1;
        });
    }

    if (activeTab === "In Progress"){
        missions = allMissions.filter((o, i)=>{
            return o.status && o.status === 2;
        });
    }

    if (activeTab === "Completed"){
        missions = allMissions.filter((o, i)=>{
            return o.status && o.status === 3;
        });
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
                            missions.map((obj, i)=>{
                                return <MissionCard
                                    key = {i}
                                    type = "normal"
                                    id = {obj.id}
                                    cl_id = {obj.cl_id || null}
                                    status = {obj.status || 1}
                                    missionName = {obj.mission_name}
                                    description = {obj.mission_description}
                                    iconPath = {missions[0].iconPath}
                                    starAmount = {obj.mission_star}
                                    xpAmount = {obj.mission_xp}

                                    GetMissions = {GetMissions}
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