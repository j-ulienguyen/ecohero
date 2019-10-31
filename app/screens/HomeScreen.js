import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/HomeScreenStyles';
import ProfileCard from '../comps/ProfileCard';
import PrizeCard from '../comps/PrizeCard';
import PatternBG from '../comps/PatternBG';


export default function HomeScreen(){
    // UI
    return (
		<View style={styles.container}>
			<ScrollView>
				<View>
					{/* Pattern doesn't display properly in scrollview (hence why I duped the pattern comp).
					I want it to be able to stay sticky while only the content moves */}
					<PatternBG/>
					<PatternBG/>
					<ProfileCard/>

					{/* Prize Section */}
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