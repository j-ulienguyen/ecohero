import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderboardFriendsStyles';
import theme from '../../styles/ThemeStyles';
import FriendsCard from '../leaderboard/FriendsCard';



export default function LeaderboardFriends(props) {
  var cardBG;
  var textColor;
  var barBG;
  var rankNumber= null;

  // Normal Leaderboard Card
  if (props.type === 'normal') {

    (cardBG = '#FAFAFA'),
    (textColor = theme.appBlack),
    (barBG = '#DFF0D7');
  }

  // UI
  return (

      <View style={styles.container}>
      {/* Friends Card */}

      <View style={[styles.friendCardContainer, {justifyContent:'center',}]}>

                    {/* Friend Card Content - Star + Avatar */}
      <FriendsCard
                        rankNumber={props.rankNumber}
                        starAmount={props.starAmount}
                        barBG={props.barBG}
                        textColor={textColor}
                        avatarIcon={props.avatarIcon}
                    />

                {/* Avatar Icon */}
                <Image
                    style = {styles.avatarIcon}
                    source = {props.iconPath}
                />
</View>
</View>



            // You need to create a comp that is reusable. If you notice, the base styling of each user card is essentially the same. You can incorporate variables to change the UI and values of them.

            // Reference my MissionCard comp.

            // The comp should allow for the following to change:
            // - Rank #
            // - Avatar icon
            // - Username
            // - Star count (Use my StarCount comp)
            // - BG color of the card

            // You shouldn't be hardcoding IMAGES.
            //  */
  );
}
