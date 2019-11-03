import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderBoardFriendsStyles';


export default function LeaderBoardFriends(){
    // UI
    return (
        <View styles={styles.container}> 

            {/* Friends Card */}
            <View
            style={styles.friendCard}
            >
            <Image 
            source = {require('../../assets/imgs/user-leaderboard-card.png')}
            />
            
            </View>
        </View>
    )
}