import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionsScreenStyles';
import PatternBG from '../comps/PatternBG';
import MissionBoardCard from '../comps/missions/MissionBoardCard';
import MissionCard from '../comps/missions/MissionCard';
import NavBar from '../comps/NavBar';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';


export default function MissionsScreen(){

    // Filter Tab Menu
    const [activeTab, setActiveTab] = useState("Available");

    // Normal Missions
    const [allMissions, setMissions] = useState([]);

    // Mission Card Icons
    const missionIcon = {
        'reduce': require('../assets/imgs/reduce-icon.png'),
        'reuse': require('../assets/imgs/reuse-icon.png'),
        'recycle': require('../assets/imgs/recycle-icon.png'),
        'eco': require('../assets/imgs/eco-icon.png')
    }

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
                        {
                            missions.map((obj, i)=>{
                                return <MissionCard
                                    key = {i}
                                    //type = "normal"
                                    type = {obj.mission_type}
                                    id = {obj.id}
                                    cl_id = {obj.cl_id || null}
                                    status = {obj.status || 1}
                                    missionName = {obj.mission_name}
                                    description = {obj.mission_description}
                                    iconPath = {missionIcon[obj.mission_icon]}
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