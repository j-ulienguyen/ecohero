import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/FriendsCardStyles';
import theme from '../../styles/ThemeStyles';
import StarCount from '../StarCount';

export default function FriendsCard({type, rankNumber, username, starCount, iconPath}) {

	var textColor;
	var barBG;
	var starIcon;
	var cardBG;
	var shadow;

	// 1st Gold Leaderboard Card
	if (type === 'first') {
		textColor = theme.appBlack,
		starIcon = "black";
		cardBG = require('../../assets/imgs/leaderboard-gold.png');
	}

	// 2nd Silver Leaderboard Card
	if (type === 'second') {
		textColor = theme.appBlack,
		starIcon = "black";
		cardBG = require('../../assets/imgs/leaderboard-silver.png');
	}

	// 3rd Bronze Leaderboard Card
	if (type === 'third') {
		textColor = theme.appBlack,
		starIcon = "black";
		cardBG = require('../../assets/imgs/leaderboard-bronze.png');
	}

	// Normal Leaderboard Card
	if (type === 'normal') {
		textColor = theme.appBlack,
		barBG = '#FAFAFA',
		starIcon = "yellow";
		cardBG = null;
		shadow = 4;
	}

	// UI
	return (
	<View style={styles.container}>
		<Image
			style = {{position:'absolute', top: 0}}
			source = {cardBG}
		/>
		<View style={[styles.friendsCardContainer, {backgroundColor: barBG}, {elevation: shadow}]}>

			{/* Rank # */}
			<Text style={[styles.rankNumber, {color: textColor}]}>{rankNumber}</Text>

			{/* Avatar Icon */}
			<Image
				style = {styles.avatarIcon}
				source = {iconPath}
			/>

			{/* Username */}
			<Text style={[styles.userName, {color: textColor}]}>{username}</Text>

			{/* Star Count # */}
			<View style={styles.starCountContainer}>
				<StarCount type={starIcon} starCount={starCount}/>
			</View>
		</View>
	</View>
	);
}
