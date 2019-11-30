import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Modal from 'react-native-modal';

// Import comps & styles below
import styles from '../styles/MissionsScreenStyles';
import PatternBG from '../comps/PatternBG';
import MissionBoardCard from '../comps/missions/MissionBoardCard';
import MissionCard from '../comps/missions/MissionCard';
import BadgeModal from '../comps/profile/BadgeModal';
import NavBar from '../comps/NavBar';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';


export default function MissionsScreen({navigation}){

    // Filter Tab Menu
    var defaultTab = navigation.state.params.activeTab || "Available";
    const [activeTab, setActiveTab] = useState(defaultTab);

    // Normal Missions
    const [allMissions, setMissions] = useState([]);

    // Mission In Progress Modal
    const [toggleModal, setToggleModal] = useState(false);

    // Mission Card Icons
    // missionIcon['name']
    const missionIcon = {
        'reduce': require('../assets/imgs/reduce-icon.png'),
        'reuse': require('../assets/imgs/reuse-icon.png'),
        'recycle': require('../assets/imgs/recycle-icon.png'),
        'eco': require('../assets/imgs/eco-icon.png')
    }

	/*
	 *****************************************************************
	 *****************************************************************
	*/

    // Load all missions from db
    const GetMissions = async()=>{
        var user_id = await AsyncStorage.getItem("user_id");
        user_id = parseInt(user_id);

        var missions = await ax("missions_read", {user_id:user_id});

        // Show entire mission list inside console
        // console.log("Missions List", missions);
        // console.log("Mission List length ", missions.length);

        setMissions(missions);
    }

	/*
	 *****************************************************************
	 *****************************************************************
	*/

    // Mission_type = 1 -> Normal
    // Mission_type = 2 -> Bonus

    var normalMission = allMissions;
    var bonusMission = allMissions;

    // Init vars - For Filter Tab Menu
    var statusTab1;
    var statusTab2;
    var statusTab3;

    // Filter missions according to the active tab
    if (activeTab === "Available"){
        // (Null or Status=1) and Mission_type=2
        bonusMission = allMissions.filter((obj, i)=>{
            return (!obj.status || obj.status === 1) && obj.mission_type == 2;
        });

        // (Null or Status=1) and Type > 0
        // Type > 0 will ignore missions in the table that is mission_type=-1
        normalMission = allMissions.filter((obj, i)=>{
            return (!obj.status || obj.status === 1) && obj.mission_type >= 0;
        });

        // Filter Tab Menu - Determine which tab is active
        statusTab1 = true;
        statusTab2 = false;
        statusTab3 = false;
    }

    if (activeTab === "In Progress"){
        // Exists + Status=2

        bonusMission = allMissions.filter((obj, i)=>{
            return (obj.status && obj.status === 2) && obj.mission_type == 2;
        });

        normalMission = allMissions.filter((obj, i)=>{
            return (obj.status && obj.status === 2) && obj.mission_type == 1;
        });

        // Filter Tab Menu - Determine which tab is active
        statusTab1 = false;
        statusTab2 = true;
        statusTab3 = false;
    }

    if (activeTab === "Completed"){
        // Exists + Status=3

        bonusMission = allMissions.filter((obj, i)=>{
            return (obj.status && obj.status === 3) && obj.mission_type == 2;
        });

        normalMission = allMissions.filter((obj, i)=>{
            return (obj.status && obj.status === 3) && obj.mission_type == 1;
        });


        // Filter Tab Menu - Determine which tab is active
        statusTab1 = false;
        statusTab2 = false;
        statusTab3 = true;
    }

    // Filter normal missions again to only show mission_type = 1
    // This will get rid of the extra bonus missions that appear
    normalMission = normalMission.filter((obj, i)=>{
        return obj.mission_type === 1;
    });

	/*
	 *****************************************************************
	 *****************************************************************
	*/

    // Load once
    useEffect(()=>{
        GetMissions();
    }, [])

	/*
	 *****************************************************************
	 *****************************************************************
	*/

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

                        statusTab1 = {statusTab1}
                        statusTab2 = {statusTab2}
                        statusTab3 = {statusTab3}

                        setActiveTab = {setActiveTab}
                    />

                    {/* Mission Card Section */}
                    <View style={styles.cardSection}>
                        {/* Populate with 1 Bonus Mission */}
                        {
                            bonusMission.map((obj, i)=>{
                                return <MissionCard
                                    key = {i}
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
                        {/* Populate with Normal Missions */}
                        {
                            normalMission.map((obj, i)=>{
                                return <MissionCard
                                    key = {i}
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
                                    setToggleModal = {setToggleModal}
                                />
                            })
                        }
                    </View>


                    {/* Mission In Progress Modal */}
                    <Modal isVisible={toggleModal}>
                        <BadgeModal
                            badgeName = "Mission Started!"
                            imagePath = {require('../assets/imgs/mission-onboard-small.png')}
                            description = "You may check the progress of your mission in the 'In Progress' tab"
                            onPress = {()=>{
                                setToggleModal(false); // Close modal
                            }}
                        />
                    </Modal>

                </View>
            </ScrollView>

            {/* Navigation Bar */}
            <NavBar currentScreen="MissionsScreen"/>
        </View>
    )
}