import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/NavBarStyles';

// Navigation
import { Actions } from 'react-native-router-flux';
import * as navigateTo from '../../RouteConstants';


export default function NavBar({initial}){

    const [navHome, setNavHome] = useState(true);
    const [navMissions, setNavMissions] = useState(false);
    const [navLeaderboard, setNavLeaderboard] = useState(false);
    const [navProfile, setNavProfile] = useState(false);

    // Default navLabel styling
    const navLabel = styles.navLabel;

    // Init vars
    var navIconPath1,
        navIconPath2,
        navIconPath3,
        navIconPath4;

    var labelActive1,
        labelActive2,
        labelActive3,
        labelActive4;

    // Path for nav icons
    var navIcons = [
        require('../assets/imgs/home-nav-active.png'),          // [0]
        require('../assets/imgs/home-nav.png'),                 // [1]

        require('../assets/imgs/mission-nav-active.png'),       // [2]
        require('../assets/imgs/mission-nav.png'),              // [3]

        require('../assets/imgs/leaderboard-nav-active.png'),   // [4]
        require('../assets/imgs/leaderboard-nav.png'),          // [5]

        require('../assets/imgs/profile-nav-active.png'),       // [6]
        require('../assets/imgs/profile-nav.png')               // [7]
    ];

    // Home Nav Button
    if (navHome === true){
        navIconPath1 = navIcons[0];
        labelActive1 = styles.navLabelActive;
    } else {
        navIconPath1 = navIcons[1];
    }

    // Missions Nav Button
    if (navMissions === true){
        navIconPath2 = navIcons[2];
        labelActive2 = styles.navLabelActive;
    } else {
        navIconPath2 = navIcons[3];
    }

    // Leaderboard Nav Button
    if (navLeaderboard === true){
        navIconPath3 = navIcons[4];
        labelActive3 = styles.navLabelActive;
    } else {
        navIconPath3 = navIcons[5];
    }

    // Profile Nav Button
    if (navProfile === true){
        navIconPath4 = navIcons[6];
        labelActive4 = styles.navLabelActive;
    } else {
        navIconPath4 = navIcons[7];
    }


    function AllFalse(){
        setNavHome(false);
        setNavMissions(false);
        setNavLeaderboard(false);
        setNavProfile(false);
    }


    // UI
    return (
        <View style={styles.container}>
            {/* Home Nav Button */}
            <TouchableOpacity
                style={styles.navBtn}
                onPress={()=>{
                    AllFalse();
                    setNavHome(!navHome);
                    Actions.reset('home');
                }}
            >
                <Image
                    style = {styles.navIcon}
                    resizeMode = "contain"
                    source = {navIconPath1}
                />
                <Text style={[navLabel, labelActive1]}>Home</Text>
            </TouchableOpacity>

            {/* Missions Nav Button */}
            <TouchableOpacity
                style={[styles.navBtn, {left: 5}]}
                onPress={()=>{
                    AllFalse();
                    setNavMissions(!navMissions);
                    Actions.reset('missions');
                }}
            >
                <Image
                    style = {styles.navIcon}
                    resizeMode = "contain"
                    source = {navIconPath2}
                />
                <Text style={[navLabel, labelActive2]}>Missions</Text>
            </TouchableOpacity>

            {/* Leaderboard Nav Button */}
            <TouchableOpacity
                style={styles.navBtn}
                onPress={()=>{
                    AllFalse();
                    setNavLeaderboard(!navLeaderboard);
                    Actions.reset('leaderboard');
                }}
            >
                <Image
                    style = {styles.navIcon}
                    resizeMode = "contain"
                    source = {navIconPath3}
                />
                <Text style={[navLabel, labelActive3]}>Leaderboard</Text>
            </TouchableOpacity>

            {/* Profile Nav Button */}
            <TouchableOpacity
                style={styles.navBtn}
                    onPress={()=>{
                        AllFalse();
                        setNavProfile(!navProfile);
                        Actions.reset('profile');
                    }}
            >
                <Image
                    style = {styles.navIcon}
                    resizeMode = "contain"
                    source = {navIconPath4}
                />
                <Text style={[navLabel, labelActive4]}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}