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
						<PrizeCard
							starCount = {5}
							imagePath = {require('../assets/imgs/bronze-prize.png')}
							prizeName = "Bronze Prize"
							description = "Awesome! You get to redeem an extra 5 minutes in recess."
							lockIcon = {null}
						/>
						<PrizeCard
							starCount = {10}
							imagePath = {require('../assets/imgs/locked-prize.png')}
							prizeName = "Silver Prize"
							description = "Great job! You earned an EcoHero bracelet. Wear it to show your success in helping the community."
							lockIcon = {require('../assets/imgs/lock-icon.png')}
						/>
						<PrizeCard
							starCount = {20}
							imagePath = {require('../assets/imgs/locked-prize.png')}
							prizeName = "Gold Prize"
							description = "Wow! You made it to this month’s mysterious prize draw. Stay tuned to see if you win. "
							lockIcon = {require('../assets/imgs/lock-icon.png')}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
    )
}