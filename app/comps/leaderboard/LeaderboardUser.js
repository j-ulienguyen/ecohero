import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderboardUserStyles';


export default function LeaderboardUser() {
  // UI
  return (
    <View styles={styles.container}>
      {/* User Card */}
      <View style={styles.userCard}>
        <Image
          source={require('../../assets/imgs/user-leaderboard-card.png')}
        />
        <Text styles={styles.userName}>hardcoreHenry</Text>
      </View>
    </View>
  );
}
