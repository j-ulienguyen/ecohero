import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderBoardUserStyles';


export default function LeaderBoardUser(){
    // UI
    return (
        <View styles={styles.container}> 

            {/* User Card */}
            <View
            style={styles.userCard}
            >
            <Image 
            source = {require('../../assets/imgs/user-leaderboard-card.png')}
            />
            
            </View>
        </View>
    )
}