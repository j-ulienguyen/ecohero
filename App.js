import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';
import HomeScreen from './app/screens/HomeScreen';
import MissionsScreen from './app/screens/MissionsScreen';
import LeaderboardScreen from './app/screens/LeaderboardScreen'
import SigninScreen from './app/screens/SigninScreen';
import RewardModal from './app/comps/RewardModal';



export default function App(){
	// UI
	return (
		<View style={styles.container}>
			<LeaderboardScreen/>
      {/* <SigninScreen/> */}
      {/* <RewardModal/> */}
			{/* <HomeScreen/> */}
			{/* <MissionsScreen/> */}
		</View>
	)
}