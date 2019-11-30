import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/NavBarStyles';

// Navigation
import { Actions } from 'react-native-router-flux';
import * as navigateTo from '../../RouteConstants';


export default function NavBar({currentScreen}){

    // Path for navIcons
    const navIcons = {
        'home': require('../assets/imgs/home-nav.png'),
        'home-active': require('../assets/imgs/home-nav-active.png'),

        'missions': require('../assets/imgs/mission-nav.png'),
        'missions-active':require('../assets/imgs/mission-nav-active.png'),

        'leaderboard': require('../assets/imgs/leaderboard-nav.png'),
        'leaderboard-active': require('../assets/imgs/leaderboard-nav-active.png'),

        'profile': require('../assets/imgs/profile-nav.png'),
        'profile-active': require('../assets/imgs/profile-nav-active.png')
    }

    // Default navIcons
    var navIconPath1 = navIcons['home'],
        navIconPath2 = navIcons['missions'],
        navIconPath3 = navIcons['leaderboard'],
        navIconPath4 = navIcons['profile'];

    // Init vars
    var labelActive1,
        labelActive2,
        labelActive3,
        labelActive4;


    // Change navIcon and navLabel state to active according to the current screen
    if (currentScreen === "HomeScreen"){
        navIconPath1 = navIcons['home-active'];
        labelActive1 = styles.navLabelActive;
    }

    if (currentScreen === "MissionsScreen"){
        navIconPath2 = navIcons['missions-active'];
        labelActive2 = styles.navLabelActive;
    }

    if (currentScreen === "LeaderboardScreen"){
        navIconPath3 = navIcons['leaderboard-active'];
        labelActive3 = styles.navLabelActive;
    }

    if (currentScreen === "ProfileScreen"){
        navIconPath4 = navIcons['profile-active'];
        labelActive4 = styles.navLabelActive;
    }



    // UI
    return (
        <View style={styles.container}>
            {/* Home Nav Button */}
            <TouchableOpacity
                style = {styles.navBtn}
                activeOpacity = {1}
                onPress={()=>{
                    Actions.reset('home');
                }}
            >
                <Image
                    style = {styles.navIcon}
                    resizeMode = "contain"
                    source = {navIconPath1}
                />
                <Text style={[styles.navLabel, labelActive1]}>Home</Text>
            </TouchableOpacity>

            {/* Missions Nav Button */}
            <TouchableOpacity
                style = {[styles.navBtn, {left: 5}]}
                activeOpacity = {1}
                onPress={()=>{
                    Actions.reset('missions');
                }}
            >
                <Image
                    style = {styles.navIcon}
                    resizeMode = "contain"
                    source = {navIconPath2}
                />
                <Text style={[styles.navLabel, labelActive2]}>Missions</Text>
            </TouchableOpacity>

            {/* Leaderboard Nav Button */}
            <TouchableOpacity
                style = {styles.navBtn}
                activeOpacity = {1}
                onPress={()=>{
                    //Actions.reset('leaderboard');
                    navigateTo.Leaderboard({activeTab:"Weekly"})
                }}
            >
                <Image
                    style = {styles.navIcon}
                    resizeMode = "contain"
                    source = {navIconPath3}
                />
                <Text style={[styles.navLabel, labelActive3]}>Leaderboard</Text>
            </TouchableOpacity>

            {/* Profile Nav Button */}
            <TouchableOpacity
                style = {styles.navBtn}
                activeOpacity = {1}
                onPress={()=>{
                    Actions.reset('profile');
                }}
            >
                <Image
                    style = {styles.navIcon}
                    resizeMode = "contain"
                    source = {navIconPath4}
                />
                <Text style={[styles.navLabel, labelActive4]}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}