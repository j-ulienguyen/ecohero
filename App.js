import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';
import SigninScreen from './app/screens/SigninScreen';
import HomeScreen from './app/screens/HomeScreen';
import MissionsScreen from './app/screens/MissionsScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import RewardModal from './app/comps/RewardModal';
import LevelUpModal from './app/comps/home/LevelUpModal';
import BadgeModal from './app/comps/profile/BadgeModal';
import SignupScreen from './app/screens/SignupScreen';


export default function App(){
	// UI
	return (
		<View style={styles.container}>
      {/* <SignupScreen /> */}
			{/* <SigninScreen/> */}
			{/* <HomeScreen/> */}
			{/* <RewardModal/> */}
			{/* <MissionsScreen/> */}
			{/* <LevelUpModal/> */}
			<ProfileScreen/>
			{/* <BadgeModal/> */}
		</View>
	)
}
