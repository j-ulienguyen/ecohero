import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';
import MissionsScreen from './app/screens/MissionsScreen';
import HomeScreen from './app/screens/HomeScreen'
import LeaderBoardScreen from './app/screens/LeaderBoardScreen'


export default function App(){
	// UI
	return (
		<View style={styles.container}>
			{/* <MissionsScreen/> */}
			<LeaderBoardScreen />

		</View>
	)
}