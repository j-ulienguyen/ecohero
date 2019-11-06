import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';
import HomeScreen from './app/screens/HomeScreen';
import MissionsScreen from './app/screens/MissionsScreen';
import LeaderboardScreen from './app/screens/LeaderboardScreen'
import SigninScreen from './app/screens/SigninScreen';
import RewardModal from './app/comps/RewardModal';

import Code from './app/subscreens/Verification_4Digit'
import QRCode from './app/subscreens/Verification_QR'




export default function App(){
	// UI
	return (
		<View style={styles.container}>
			{/* <LeaderboardScreen/> */}
			{/* <Code /> */}
			<QRCode />
      {/* <SigninScreen/> */}
      {/* <RewardModal/> */}
			{/* <HomeScreen/> */}
			{/* <MissionsScreen/> */}
		</View>
	)
}