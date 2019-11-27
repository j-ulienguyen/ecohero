import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';
import RewardModal from './app/comps/RewardModal';

import Code from './app/subscreens/Verification_4Digit'
import QRCode from './app/subscreens/Verification_QR'

import GetStarted from './app/comps/onboard/GetStarted';


// Navigation
import Route from './Route';


// export default from './storybook';

export default function App(){
	console.disableYellowBox = true; //goodbye

	// UI
	return (
		<View style={styles.container}>
			<Route/>
			{/* <GetStarted /> */}

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