import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderboardFriendsStyles';
import theme from '../../styles/ThemeStyles';
import FriendsCard from './FriendsCard';


export default function LeaderboardFriends(props){

	var cardBG;
	var textColor;
	var barBG;
	var rankNumber= null;

	// Normal Leaderboard Card
	if (props.type === 'normal') {
		textColor = theme.appBlack,
		barBG = '#FAFAFA'
	}

	/*
		Put in the values to style each card type accordingly
		You can remove this comment when you're done
	*/

	// 1st Gold Leaderboard Card
	if (props.type === 'first'){
		textColor = theme.appBlack,
		barBG = '#DFF0D7'

	}

	// 2nd Silver Leaderboard Card
	if (props.type === 'second'){
		textColor = theme.appBlack,
		barBG = '#DFF0D7'

	}

	// 3rd Bronze Leaderboard Card
	if (props.type === 'third'){
        cardBG = '#FAFAFA',
		textColor = theme.appBlack,
		barBG = '#DFF0D7'

	}

	/*
		I think you can just combine the FriendsCard with this, instead of nesting it like that.

		The issue with the cardBG color was b/c of the width and height of the friendcardcontainer inside the FriendsCard comp
	*/


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
	);
}
