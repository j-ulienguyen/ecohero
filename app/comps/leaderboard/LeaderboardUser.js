import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderboardUserStyles';


export default function LeaderboardUser(props) {

    var username;

  // UI
  return (
    <View style={styles.container}>
      <View style={styles.userCardContainer}>

      {/* User Card */}
        <Image
          source={require('../../assets/imgs/user-leaderboard-card.png')}
          />
         {/* User Avatar */}

        <Image
			    style = {styles.avatarIcon}
			    source = {props.iconPath}
          />

        <Text style={styles.userName}>
          {props.username}</Text>

        {/* Star Amount */}
        <Text style={styles.starAmount}>
          {props.starAmount}
        </Text>
        {/* Rank Number */}
        <Text style={styles.rankNumber}>
          {props.rankNumber}			
        </Text>
        {/* Star Icon */}
        <Image
            style={styles.starIcon}
            source={require('../../assets/imgs/star-icon.png')}
          />
          </View>
    </View>
  );
}
