import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import PatternBG from '../comps/PatternBG';
import LeaderboardCard from '../comps/leaderboard/LeaderboardCard';
import LeaderboardUser from '../comps/leaderboard/LeaderboardUser';
import LeaderboardFriends from '../comps/leaderboard/LeaderboardFriends';
import styles from '../styles/LeaderboardScreenStyles';

// Import comps below

export default function LeaderboardScreen() {
  // UI
  return (
    <View style={{flex: 1, height: '100%'}}>
      {/* Fixed Pattern BG */}
      <PatternBG />

      {/* Scrollable Content - On Top */}
      <View style={{flex: 1, elevation: 100000}}>
        <ScrollView style={{flex: 1}}>
          {/* Leaderboard Header Card */}
          <LeaderboardCard />
        </ScrollView>

        {/* LeaderBoard Card Section */}
        <ScrollView
        style={styles.cardSection}>
          <LeaderboardFriends />
          <LeaderboardFriends />

        </ScrollView>
      </View>

      <View style={{position: 'absolute', bottom: 0, elevation:1000000}}>
        {/* Leaderboard User Card */}
        <LeaderboardUser />
      </View>
    </View>
  );
}
