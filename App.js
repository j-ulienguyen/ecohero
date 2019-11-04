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

export default function App(){
	// UI
	return (
		<View style={styles.container}>
			{/* <SigninScreen/> */}
			{/* <HomeScreen/> */}

			{/* <RewardModal
				heading = "Woo-hoo!"
				description = "Thank you for joining EcoHero. Please accept these rewards as a token of appreciation"
				imagePath = {require('./app/assets/imgs/star-reward.png')}
			/> */}

			{/* <MissionsScreen/> */}
			{/* <LevelUpModal/> */}
			<ProfileScreen/>

			{/* <BadgeModal
				heading = "Eco-friendly"
				imagePath = {require('./app/assets/imgs/eco-badge.png')}
				description = "You've unlocked a badge for completing your first eco mission"
			/> */}
		</View>
	)
}
