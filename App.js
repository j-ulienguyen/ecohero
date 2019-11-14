import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';

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