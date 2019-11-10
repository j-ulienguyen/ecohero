import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/FriendsCardStyles';
import theme from '../../styles/ThemeStyles';
import StarCount from '../StarCount';

export default function FriendsCard(props) {

	var textColor;
	var barBG;
	var starIcon;

	// 1st Gold Leaderboard Card
	if (props.type === 'first') {
		textColor = theme.appBlack,
		barBG = '#FCDF76',
		starIcon = "black";
	}

	// 2nd Silver Leaderboard Card
	if (props.type === 'second') {
		textColor = theme.appBlack,
		barBG = '#ECECEC',
		starIcon = "black";
	}

	// 3rd Bronze Leaderboard Card
	if (props.type === 'third') {
		textColor = theme.appBlack,
		barBG = '#F6B684',
		starIcon = "black";
	}

	// Normal Leaderboard Card
	if (props.type === 'normal') {
		textColor = theme.appBlack,
		barBG = '#FAFAFA',
		starIcon = "yellow";
	}

	// UI
	return (
	<View style={styles.container}>
		<View style={[styles.friendsCardContainer, {backgroundColor: barBG}]}>
			<Text style={[styles.rankNumber, {color: textColor}]}>{props.rankNumber}</Text>
			<Image
				style = {styles.avatarIcon}
				source = {props.iconPath}
			/>
			<Text style={[styles.userName, {color: textColor}]}>{props.username}</Text>

			<View style={styles.starCountContainer}>
				<StarCount type={starIcon} starCount={props.starCount}/>
			</View>

			{/* Star Amount Container */}
			{/* <View style={styles.starAmountContainer}> */}
				{/* Star Icon # */}
				{/* <Image
				style={styles.starIcon}
				source={require('../../assets/imgs/black-star-icon.png')}
				/>
			</View> */}

			{/* Star Amount */}
			{/* <Text style={[styles.starAmount, {color: textColor}]}>
				{props.starAmount}
			</Text> */}
		</View>
	</View>
	);
}
