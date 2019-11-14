import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/HomeScreenStyles';
import PatternBG from '../comps/PatternBG';
import ProfileCard from '../comps/home/ProfileCard';
import PrizeProgress from '../comps/home/PrizeProgress';
import PrizeCard from '../comps/home/PrizeCard';
import NavBar from '../comps/NavBar';

// Import data files below
import {prizeCards} from '../data/PrizeCardData';


export default function HomeScreen(){
    // UI
    return (
		<View style={styles.container}>
			{/* Fixed Pattern BG */}
			<PatternBG/>

			{/* Scrollable Content - On Top*/}
			<ScrollView>
				<View>
					{/* Profile Card - Full Version */}
					<ProfileCard
						type="full"
						avatarPath={require('../assets/imgs/can-avatar.png')}
						username="hardcoreHenry"
						missionAvailable={30}
						level={5}
						starCount={5}
						missionCount={0}
					/>

					{/* Star Prizes - Progress Bar */}
					<PrizeProgress starRemainder={5+' stars'} prizeName="Silver Prize"/>

					{/* Prize Card Section */}
					<View style={styles.prizeSection}>
						{/* Populate with Prize Card from PrizeCardData.js */}
						{
							prizeCards.map((obj,i)=>{
								return <PrizeCard
									key = {i}
									prizeName = {obj.prizeName}
									description = {obj.description}
									imagePath = {obj.imagePath}
									starCount = {obj.starCount}
									lockIconPath = {obj.lockIconPath}
								/>
							})
						}
					</View>
				</View>
			</ScrollView>

			{/* Navigation Bar */}
			<NavBar currentScreen="HomeScreen"/>
		</View>
    )
}