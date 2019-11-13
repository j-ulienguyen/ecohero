import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderboardCardStyles';
import FilterTabMenu from '../FilterTabMenu';


export default function LeaderboardCard() {

	// UI
	return (
		<View style={styles.container}>
			{/* Purple BG Card */}
			<Image source={require('../../assets/imgs/leaderboard-card-bg.png')}/>

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

			{/* Filter Tab Menu */}
			<FilterTabMenu
				tab1 = "Weekly"
				tab2 = "Monthly"
				tab3 = "All-time"
			/>
		</View>
	);
}
