import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/LeaderboardCardStyles';
import FilterTabMenu from '../FilterTabMenu';


export default function LeaderboardCard({tab1, tab2, tab3, setActiveTab, statusTab1, statusTab2, statusTab3}) {

	const exactTime = new Date();

	var month = exactTime.getMonth();
	var day = exactTime.getDay();
	var year = exactTime.getFullYear();

	if (month === 12){
		month = 11; // December is index 11
	} else {
		month = month; // Month will correspond with proper index
	}

	var monthNum = month;
	var calendar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] // i = 0-11


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
			{/* <Text style={styles.timePeriod}>Week of October 10, 2019</Text> */}
			<Text style={styles.timePeriod}>As of {calendar[monthNum]} {day}, {year}</Text>

			{/* Reset in X days */}
			{/* Variable added to hook amount of days, currently commented out */}
			<Text style={styles.reset30days}>Reset in 30 days</Text>
			{/* <Text style={styles.reset30days}>Reset in {remainingDays} days</Text> */}

			{/* Filter Tab Menu */}
			<FilterTabMenu
				tab1 = {tab1}
                tab2 = {tab2}
                tab3 = {tab3}

				statusTab1 = {statusTab1}
				statusTab2 = {statusTab2}
				statusTab3 = {statusTab3}

				setActiveTab = {setActiveTab}
			/>
		</View>
	);
}
