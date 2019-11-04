import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/HomeScreenStyles';
import PatternBG from '../comps/PatternBG';
import ProfileCard from '../comps/home/ProfileCard';
import PrizeProgress from '../comps/home/PrizeProgress';
import PrizeCard from '../comps/home/PrizeCard';


export default function HomeScreen(){
    // UI
    return (
		<View style={styles.container}>
			{/* Fixed Pattern BG */}
			<PatternBG/>

			{/* Scrollable Content - On Top*/}
			<ScrollView>
				<View>
					{/* User Profile Card */}
					<ProfileCard/>

					{/* Star Prizes - Progress Bar */}
					<PrizeProgress/>

					{/* Prize Card Section */}
					<View style={styles.prizeSection}>
						<PrizeCard/>
						<PrizeCard/>
						<PrizeCard/>
					</View>
				</View>
			</ScrollView>
		</View>
    )
}