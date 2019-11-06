import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderboardFriendsStyles';


export default function LeaderboardFriends(){
    // UI
    return (
        <View styles={styles.container}>
            {/* Friends Card */}
            <View style={styles.friendCard}>
                <Image source = {require('../../assets/imgs/leaderboardfriends-gold.png')}/>
                <Image source = {require('../../assets/imgs/leaderboardfriends-silver.png')}/>
                <Image source = {require('../../assets/imgs/leaderboardfriends-bronze.png')}/>
                <Image source = {require('../../assets/imgs/leaderboardfriends-unranked.png')}/>
            </View>

            {/*

            You need to create a comp that is reusable. If you notice, the base styling of each user card is essentially the same. You can incorporate variables to change the UI and values of them.

            Reference my MissionCard comp.

            The comp should allow for the following to change:
            - Rank #
            - Avatar icon
            - Username
            - Star count (Use my StarCount comp)
            - BG color of the card

            You shouldn't be hardcoding IMAGES.
             */}

        </View>
    )
}