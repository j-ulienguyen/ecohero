import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';
import HomeScreen from './app/screens/HomeScreen';
import MissionsScreen from './app/screens/MissionsScreen';
import SigninScreen from './app/screens/SigninScreen';
import RewardModal from './app/comps/RewardModal';
import LevelUpModal from './app/comps/LevelUpModal';

export default function App(){
	// UI
	return (
		<View style={styles.container}>
			<HomeScreen/>
      {/* <SigninScreen/> */}
      {/* <RewardModal/> */}
			{/* <HomeScreen/> */}
			{/* <MissionsScreen/> */}
			<LevelUpModal/>
		</View>
	)
}
