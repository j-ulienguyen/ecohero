import React from 'react';
import {View, Text, Image,TouchableOpacity,} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderBoardCardStyles';


export default function LeaderBoardCard() {
  // UI
  return (
    <View style={styles.container}>

        {/* Purple BG Card */}
        <Image
          source={require('../../assets/imgs/leaderboard-card-bg.png')}
        />

        {/* Leaderboard Heading */}
        <Text style={styles.mainHeading}>Leaderboard</Text>
        
        {/* Leaderboard Sub-Heading */}
        <Text style={styles.subHeading}>Top 30</Text>

        {/* Time Period Text */}
        <Text style={styles.timePeriod}>Week of October 10, 2019</Text>

        {/* Reset in X days */}

        {/* Variable added to hook amount of days, currently commented out */}
        <Text style={styles.reset30days}>Reset in 30 days</Text>
        {/* <Text style={styles.reset30days}>Reset in {remainingDays} days</Text> */}

          {/* Filters */}

          <View style={styles.filterContainer}>

          {/* Weekly Text Button */}
          <TouchableOpacity
            style={styles.filterBtn}
          >
            <Text style={[styles.filterBtnText]}>Weekly</Text>
          </TouchableOpacity>

          {/* Monthly Text Button */}
          <TouchableOpacity
            style={styles.filterBtn}
          >
            <Text style={[styles.filterBtnText]}>Monthly</Text>
          </TouchableOpacity>

          {/* All-Time Text Button */}
          <TouchableOpacity
            style={styles.filterBtn}
          >
            <Text style={[styles.filterBtnText]}>All Time</Text>
          </TouchableOpacity>

        </View>

        {/* User Card */}
        <View
        style={styles.userCard}
        >
          <Image 
          source = {require('../../assets/imgs/user-leaderboard-card.png')}
          />
          
        </View>
    </View>
  );
}
