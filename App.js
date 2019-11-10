import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from './app/styles/AppStyles';

// Navigation
import Route from './Route';


function App(){
	// UI
	return (
		<View style={styles.container}>
			<Route/>
		</View>
	)
}


// To view App -> Uncomment below
export default App;

// To view Storybook -> Uncomment below
// export default from './storybook';
