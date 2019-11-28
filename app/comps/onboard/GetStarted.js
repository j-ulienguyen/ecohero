import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/GetStartedStyles';
import GreenButton from '../GreenButton';
import EcoHeroLogo from '../EcoHeroLogo';
import LottieView from 'lottie-react-native';

import * as navigateTo from '../../../RouteConstants';
import BackBar from '../BackBar';


export default function GetStarted(){

	// UI
	return (
		<View style={[styles.container, styles.whiteBg]}>
			{/* <View style={styles.logo}> */}
				{/* <EcoHeroLogo /> */}
				<LottieView
					source={require('../../assets/imgs/ecoheroConfetti.json')}
					style={{width:'80%', height:'70%', justifyContent:'center', alignItems:'center', marginTop:'-20%', marginBottom:'-20%'}}
					colorFilters={[{
						keypath: "button",
						color: "#F00000"
					},{
						keypath: "Sending Loader",
						color: "#F00000"
					}]}
					autoPlay
					loop
				/>
			{/* </View> */}
				<BackBar />

			{/* Welcome Page */}
				<Text style={styles.headTxt}>Hooray!</Text>
				<Text style={styles.subTxt}>Your account has been created successfully. Go through our quick tutorial to earn your first star! </Text>

			{/* Start Button */}
			<GreenButton width={309} height={43} marginTop={30}title="Let's Go" onPress={navigateTo.Onboard}/>

			{/* Skip Button */}
			<TouchableOpacity 
				onPress={navigateTo.Home}>
				<Text style={styles.btmText}>skip tutorial</Text>
			</TouchableOpacity>
		
		</View>
	);
};