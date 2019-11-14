import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';

import Code from './app/subscreens/Verification_4Digit'
import QRCode from './app/subscreens/Verification_QR'


// Navigation
import Route from './Route';


// export default from './storybook';

export default function App(){
	// UI
	return (
		<View style={styles.container}>
			<Route/>
		</View>
	)
}