import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/GetStartedStyles';
import GreenButton from '../GreenButton';
import EcoHeroLogo from '../EcoHeroLogo';

import * as navigateTo from '../../../RouteConstants';
import BackBar from '../BackBar';


export default function GetStarted(){

	const [txt, setTxt] = useState("");


	// UI
	return (
		<View style={[styles.container, styles.whiteBg]}>
			<View style={styles.logo}>
				<EcoHeroLogo />
			</View>
				<BackBar />

			{/* Welcome Page */}
				<Text style={styles.headTxt}>Welcome to EcoHero</Text>
				<Text style={styles.subTxt}>Yippee! By signing up you are one step closer to becoming an EcoHero. The more missions you complete the more rewards you win!</Text>

			{/* Start Button */}
			<GreenButton width={309} height={43} marginTop={40}title="Get Started" onPress={navigateTo.Onboard}/>

			{/* Skip Button */}
			<TouchableOpacity 
				onPress={navigateTo.Home}>
				<Text style={styles.btmText}>Skip</Text>
			</TouchableOpacity>
		
		</View>
	);
};