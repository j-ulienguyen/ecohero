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
		<View style={{flex: 1, height: '100%'}}>
			{/* Fixed Pattern BG */}
			<PatternBG />

			{/* Scrollable Content - On Top */}

			{/*
				I'm not sure why you have 2 ScrollViews. I think you can just do one and have it as

				Scrollview
				- LeaderboardCard
				- LeaderboardFriends
				/Scrollview

				Do keep in mind that we still need to implement the nav bar, so the bottom portion of the screen will be that. Hence we would need more area to scroll above

				Also what is the purpose of elevation? I thought it was used for dropshadows.
			 */}

			<View style={{flex: 1, elevation: 100000}}>


				{/* LeaderBoard Card Section */}
				<ScrollView>
					
					<LeaderboardCard />

					<View style={styles.cardSection}>

					<FriendsCard 
						type="first"
						username='jjanicefong'
						starAmount={45}
						iconPath={require('../assets/imgs/lunchbox-avatar.png')}
						rankNumber={1}
						/>
					<FriendsCard 
						type="second"
						username='xAznJay'
						starAmount={35}
						iconPath={require('../assets/imgs/paper-avatar.png')}
						rankNumber={2}

						/>
					<FriendsCard 
						type="third"
						username='jujubean'
						starAmount={30}
						iconPath={require('../assets/imgs/can-avatar.png')}
						rankNumber={3}

						/>
					<FriendsCard 
						type="normal"
						username='ashlynnchen'
						starAmount={25}
						iconPath={require('../assets/imgs/can-avatar.png')}
						rankNumber={4}

						
						/>
					<FriendsCard 
						type="normal"
						username='noob'
						starAmount={10}
						iconPath={require('../assets/imgs/jug-avatar.png')}
						rankNumber={5}

						/>
					<FriendsCard 
						type="normal"
						username='ramtheram2017'
						starAmount={10}
						iconPath={require('../assets/imgs/jug-avatar.png')}
						rankNumber={6}

						/>

					</View>

				</ScrollView>
			</View>

			<View style={{position: 'absolute', bottom: 0, elevation:1000000}}>
				{/* Leaderboard User Card */}
				<LeaderboardUser
					username='hardcoreHenry'
					iconPath={require('../assets/imgs/can-avatar.png')}
					rankNumber={35}
					starAmount={5}
					
					
					/>
			</View>
		</View>
	);
}
