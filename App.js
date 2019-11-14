import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';
import RewardModal from './app/comps/RewardModal';

// Navigation
import Route from './Route';


// export default from './storybook';

export default function App(){
	// UI
	return (
		<View style={styles.container}>
			<Route/>

			{/* <RewardModal
				heading = "Heading"
				description = "Description"
				imagePath = {require('./app/assets/imgs/star-reward.png')}
				starAmount = {1}
				xpAmount = {20}
			/> */}
		</View>
	)
}