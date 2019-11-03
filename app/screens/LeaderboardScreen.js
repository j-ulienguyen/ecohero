import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import PatternBG from '../comps/PatternBG'
import LeaderBoardCard from '../comps/leaderboard/LeaderBoardCard'
import LeaderBoardUser from "../comps/leaderboard/LeaderBoardUser"
import LeaderBoardFriends from "../comps/leaderboard/LeaderBoardFriends"
import styles from "../styles/LeaderBoardScreenStyles"

// Import comps below



export default function LeaderBoardScreen(){
    // UI
    return (
        <View>
            {/* Fixed Pattern BG */}
            <PatternBG />

            {/* Scrollable Content - On Top */}
            <ScrollView>
                <View>
                    {/* Leaderboard Header Card */}
                    <LeaderBoardCard />

                    {/* LeaderBoard Card Section */}
                    <View style={styles.cardSection}></View>
                    <LeaderBoardFriends />
                    <LeaderBoardFriends />
                    <LeaderBoardFriends />
                </View>

            </ScrollView>

                <View>
                    {/* Leaderboard User Card */}
                    <LeaderBoardUser />
                </View>

        </View>
    )
}