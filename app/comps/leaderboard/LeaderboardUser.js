import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderboardUserStyles';
import StarCount from '../StarCount';


export default function LeaderboardUser(props) {


	// UI
	return (
	<View style={styles.container}>
		<View style={styles.userCardContainer}>

			{/* Purple User Card */}
			<Image source={require('../../assets/imgs/user-leaderboard-card.png')}/>

			{/* Rank Number */}
			<Text style={styles.rankNumber}>{props.rankNumber}</Text>

			{/* User Avatar */}
			<Image
				style = {styles.avatarIcon}
				source = {props.iconPath}
			/>

			{/* Username */}
			<Text style={styles.userName}>{props.username}</Text>

			{/* Star Count */}
			<View style={styles.starCountContainer}>
				<StarCount type="yellow" starCount={props.starCount} textColor="white"/>
			</View>

			{/* Star Amount */}
			{/* <Text style={styles.starAmount}>{props.starAmount}</Text> */}

			{/* Star Icon */}
			{/* <Image
				style={styles.starIcon}
				source={require('../../assets/imgs/star-icon.png')}
			/> */}
		</View>
	</View>
	);
}
