import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';
import HomeScreen from './app/screens/HomeScreen';
import MissionsScreen from './app/screens/MissionsScreen';
import LeaderBoardScreen from './app/screens/LeaderBoardScreen'
import SigninScreen from './app/screens/SigninScreen';
import RewardModal from './app/comps/RewardModal';



export default function App(){
	// UI
	return (
		<View style={styles.container}>
			<LeaderBoardScreen/>
      {/* <SigninScreen/> */}
      {/* <RewardModal/> */}
			{/* <HomeScreen/> */}
			{/* <MissionsScreen/> */}
		</View>
	)
}