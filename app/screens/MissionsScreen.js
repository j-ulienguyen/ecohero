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
import AsyncStorage from '@react-native-community/async-storage';


export default function MissionsScreen(){

    // Filter Tab Menu
    const [activeTab, setActiveTab] = useState("Available");

    // Normal Missions
    const [allMissions, setMissions] = useState([]);


    // Load all missions from db
    const GetMissions = async()=>{
        // Get user_id from AsyncStorage
        var user_id = await AsyncStorage.getItem("user_id");

        var missions = await ax("missions_read", {user_id:user_id});
        setMissions(missions);
    }


    // Reassign to new var -> Can't use const allMissions
    var missions = allMissions;

    if (activeTab === "Available"){
        missions = allMissions.filter((obj, i)=>{
            // Null or Status=1
            return !obj.status || obj.status === 1;
        });
    }

    if (activeTab === "In Progress"){
        missions = allMissions.filter((obj, i)=>{
            // Exists + Status=2
            return obj.status && obj.status === 2;
        });
    }

    if (activeTab === "Completed"){
        missions = allMissions.filter((obj, i)=>{
            // Exists + Status=3
            return obj.status && obj.status === 3;
        });
    }

    // Load once
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
                                // Path for Mission Icons
                                if (obj.mission_icon){
                                    if(obj.mission_icon === "reduce"){
                                        obj.mission_icon = require('../assets/imgs/reduce-icon.png');
                                    }
                                    if(obj.mission_icon === "reuse"){
                                        obj.mission_icon = require('../assets/imgs/reuse-icon.png');
                                    }
                                    if(obj.mission_icon === "recycle"){
                                        obj.mission_icon = require('../assets/imgs/recycle-icon.png');
                                    }
                                    if(obj.mission_icon === "eco"){
                                        obj.mission_icon = require('../assets/imgs/eco-icon.png');
                                    }
                                }

                                return <MissionCard
                                    key = {i}
                                    //type = "normal"
                                    type = {obj.mission_type}
                                    id = {obj.id}
                                    cl_id = {obj.cl_id || null}
                                    status = {obj.status || 1}
                                    missionName = {obj.mission_name}
                                    description = {obj.mission_description}
                                    iconPath = {obj.mission_icon}
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