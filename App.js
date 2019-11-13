import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';
import SigninScreen from './app/screens/SigninScreen';
import HomeScreen from './app/screens/HomeScreen';
import MissionsScreen from './app/screens/MissionsScreen';
import LeaderboardScreen from './app/screens/LeaderboardScreen'
import ProfileScreen from './app/screens/ProfileScreen';
import RewardModal from './app/comps/RewardModal';
import LevelUpModal from './app/comps/home/LevelUpModal';
import BadgeModal from './app/comps/profile/BadgeModal';
import SignupScreen from './app/screens/SignupScreen';
import OnboardingScreen from './app/screens/OnboardingScreen';


// export default from './storybook';

export default function App(){
	// UI
	return (
		<View style={styles.container}>
			<SigninScreen />

      	
		</View>
	)
}