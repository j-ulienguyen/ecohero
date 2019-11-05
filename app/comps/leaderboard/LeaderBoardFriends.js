import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderboardFriendsStyles';


export default function LeaderboardFriends(){
    // UI
    return (
        <View styles={styles.container}> 

            {/* Friends Card */}
            <View
            style={styles.friendCard}
            >
            <Image source = {require('../../assets/imgs/leaderboardfriends-gold.png')}/>
            <Image source = {require('../../assets/imgs/leaderboardfriends-silver.png')}/>
            <Image source = {require('../../assets/imgs/leaderboardfriends-bronze.png')}/>
            <Image source = {require('../../assets/imgs/leaderboardfriends-unranked.png')}/>
            
            </View>
        </View>
    )
}