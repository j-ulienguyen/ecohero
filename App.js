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


export default from './storybook';

function App(){
	// UI
	return (
		<View style={styles.container}>
			{/* <SigninScreen /> */}
			{/* <SignupScreen /> */}
			{/* <OnboardingScreen /> */}

			{/* <LeaderboardScreen /> */}
			{/* <MissionsScreen /> */}
			{/* <SignupScreen /> */}
			{/* <SigninScreen/> */}

			{/* <HomeScreen/> */}

			{/* <RewardModal
				heading = "Woo-hoo!"
				description = "Thank you for joining EcoHero. Please accept these rewards as a token of appreciation"
				imagePath = {require('./app/assets/imgs/star-reward.png')}
				starAmount = {5}
				xpAmount = {100}
			/> */}

      {/* <MissionsScreen/> */}
			{/* <LevelUpModal level="5"/> */}
			{/* <ProfileScreen/> */}

			{/* <BadgeModal
				heading = "Eco-friendly"
				imagePath = {require('./app/assets/imgs/eco-badge.png')}
				description = "You've unlocked a badge for completing your first eco mission"
			/> */}
		</View>
	)
}