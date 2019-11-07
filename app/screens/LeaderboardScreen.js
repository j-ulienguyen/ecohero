import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps below
import styles from '../styles/LeaderboardScreenStyles';
import PatternBG from '../comps/PatternBG';
import LeaderboardCard from '../comps/leaderboard/LeaderboardCard';
import LeaderboardUser from '../comps/leaderboard/LeaderboardUser';
import LeaderboardFriends from '../comps/leaderboard/LeaderboardFriends';


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
				<ScrollView style={{flex: 1}}>
					{/* Leaderboard Header Card */}
					<LeaderboardCard />
				</ScrollView>

				{/* LeaderBoard Card Section */}
				<ScrollView style={styles.cardSection}>

          {/* In process of merging FriendsCard*/}
					<LeaderboardFriends
						barBG='#FCDF76'
						iconPath={require('../assets/imgs/paper-avatar.png')}
						rankNumber='1'
						starAmount='35'
					/>

					<LeaderboardFriends
						barBG='#ECECEC'
						iconPath={require('../assets/imgs/lunchbox-avatar.png')}
						rankNumber='2'
						starAmount='30'
					/>

					<LeaderboardFriends
						barBG='#F6B684'
						iconPath={require('../assets/imgs/lunchbox-avatar.png')}
						rankNumber='3'
						starAmount='25'
					/>
          <LeaderboardFriends 
          rankNumber='4'
          starAmount='20'
          
          />
				</ScrollView>
			</View>

			<View style={{position: 'absolute', bottom: 0, elevation:1000000}}>
				{/* Leaderboard User Card */}
				<LeaderboardUser />
			</View>
		</View>
	);
}
