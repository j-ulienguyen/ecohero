import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/LevelUpModalStyles';
import ScreenOverlay from './ScreenOverlay';


export default function LevelUpModal(){
	// UI
	return (
		<View style={styles.container}>
			{/* Screen Overlay - Semi Transparent */}
			<ScreenOverlay/>

			{/* Level Up Modal */}
			<View style={styles.modal}>
				{/* Modal Heading */}
				<Text style={styles.modalHeading}>You Leveled Up!</Text>

				{/* Level Up Badge */}
				<View style={styles.badgeContainer}>
					<Image
						style = {styles.levelupBadge}
						source = {require('../assets/imgs/levelup-badge.png')}
					/>
					<Text style={styles.levelText}>2</Text>
				</View>

				{/* Done Button */}
				<TouchableOpacity
					style = {styles.greenBtn}
				>
					<Text style={styles.btnText}>Done</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}