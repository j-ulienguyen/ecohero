import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderboardUserStyles';
import StarCount from '../StarCount';


export default function LeaderboardUser({rankNumber, iconPath, username, starCount}) {

	// UI
	return (
		<View style={styles.container}>
			<View style={styles.userCardContainer}>

				{/* Purple User Card */}
				<Image source={require('../../assets/imgs/user-leaderboard-card.png')}/>

				{/* Rank Number */}
				<Text style={styles.rankNumber}>{rankNumber}</Text>

				{/* User Avatar */}
				<Image
					style = {styles.avatarIcon}
					source = {iconPath}
				/>

				{/* Username */}
				<Text style={styles.userName}>{username}</Text>

				{/* Star Count */}
				<View style={styles.starCountContainer}>
					<StarCount type="yellow" starCount={starCount} textColor="white"/>
				</View>
			</View>
		</View>
	);
}
