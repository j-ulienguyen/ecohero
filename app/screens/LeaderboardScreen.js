import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps below
import styles from '../styles/LeaderboardScreenStyles';
import PatternBG from '../comps/PatternBG';
import LeaderboardCard from '../comps/leaderboard/LeaderboardCard';
import LeaderboardUser from '../comps/leaderboard/LeaderboardUser';
import FriendsCard from '../comps/leaderboard/FriendsCard';


export default function LeaderboardScreen() {
	// UI
	return (
		<View style={styles.container}>
			{/* Fixed Pattern BG */}
			<PatternBG />

			{/* Scrollable Content - On Top */}
			<ScrollView>
				{/* Leaderboard Card */}
				<LeaderboardCard />

				{/* Leaderboard Friends Card Section*/}
				<View style={styles.cardSection}>

					<FriendsCard
						type="first"
						username='jjanicefong'
						starCount={45}
						iconPath={require('../assets/imgs/lunchbox-avatar.png')}
						rankNumber={1}
					/>

					<FriendsCard
						type="second"
						username='xAznJay'
						starCount={35}
						iconPath={require('../assets/imgs/paper-avatar.png')}
						rankNumber={2}
					/>

					<FriendsCard
						type="third"
						username='jujubean'
						starCount={30}
						iconPath={require('../assets/imgs/can-avatar.png')}
						rankNumber={3}
					/>

					<FriendsCard
						type="normal"
						username='ashlynnchen'
						starCount={25}
						iconPath={require('../assets/imgs/can-avatar.png')}
						rankNumber={4}
					/>

					<FriendsCard
						type="normal"
						username='noob'
						starCount={10}
						iconPath={require('../assets/imgs/jug-avatar.png')}
						rankNumber={5}
					/>

					<FriendsCard
						type="normal"
						username='ramtheram2017'
						starCount={10}
						iconPath={require('../assets/imgs/jug-avatar.png')}
						rankNumber={6}
					/>
				</View>
			</ScrollView>

			<View style={{position: 'absolute', bottom: 0}}>
				{/* Leaderboard User Card */}
				<LeaderboardUser
					username='hardcoreHenry'
					iconPath={require('../assets/imgs/can-avatar.png')}
					rankNumber={35}
					starCount={5}
				/>
			</View>
		</View>
	);
}
