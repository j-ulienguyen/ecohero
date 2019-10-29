import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from '../styles/HomeScreenStyles';
import ProfileCard from '../comps/ProfileCard';
import PatternBG from '../comps/PatternBG';


export default function HomeScreen(){
    // UI
    return (
		<View style={styles.container}>
			<ProfileCard/>
			<PatternBG/>
		</View>
    )
}