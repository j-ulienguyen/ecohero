import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';
import HomeScreen from './app/screens/HomeScreen';


export default function App(){
	// UI
	return (
		<View style={styles.container}>
			<HomeScreen/>
		</View>
	)
}