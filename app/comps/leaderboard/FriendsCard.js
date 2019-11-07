import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/FriendsCardStyles';
import theme from '../../styles/ThemeStyles';

export default function FriendsCard(props) {
  var textColor;
  var barBG;

  // 1st Gold Leaderboard Card
  if (props.type === 'first') {
    (textColor = theme.appBlack), (barBG = '#FCDF76');
  }

  // 2nd Silver Leaderboard Card
  if (props.type === 'second') {
    (textColor = theme.appBlack), (barBG = '#ECECEC');
  }

  // 3rd Bronze Leaderboard Card
  if (props.type === 'third') {
    (textColor = theme.appBlack), (barBG = '#F6B684');
  }
  if (props.type === 'normal') {
    (textColor = theme.appBlack), (barBG = '#FAFAFA');
  }
  // UI
  return (
    <View style={styles.container}>
      <View style={[styles.friendsCardContainer, {backgroundColor: barBG}]}>
        <Text style={[styles.rankNumber, {color: textColor}]}>
          {props.rankNumber}			
          
        </Text>
          <Image
			style = {styles.avatarIcon}
			source = {props.iconPath}
				/>
        <Text style={[styles.userName, {color: textColor}]}>{props.username}</Text>

        {/* Star Reward Amount */}
        <View style={styles.starAmountContainer}>
          {/* Star Amount # */}
          <Text style={[styles.starAmount, {color: textColor}]}></Text>
          <Image
            style={styles.starIcon}
            source={require('../../assets/imgs/black-star-icon.png')}
          />
          
        </View>

        {/* XP Reward Amount */}
        {/* Rank Number */}
        <Text style={[styles.starAmount, {color: textColor}]}>
          {props.starAmount}
        </Text>
      </View>
    </View>
  );
}
