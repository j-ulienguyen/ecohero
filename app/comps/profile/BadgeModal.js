import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/BadgeModalStyles';
import ScreenOverlay from '../ScreenOverlay';


export default function BadgeModal(){
	// UI
	return (
		<View style={styles.container}>
			{/* Screen Overlay - Semi Transparent */}
			<ScreenOverlay/>

			{/* Badge Modal */}
			<View style={styles.modal}>
				{/* Badge Name */}
				<Text style={styles.modalHeading}>Badge Name</Text>

				{/* Badge Icon */}
				<Image
					style = {styles.badge}
					source = {require('../../assets/imgs/eco-badge.png')}
				/>

				{/* Badge Description */}
				<Text style={styles.badgeDesc}>You’ve unlocked a badge for completing your first eco mission</Text>

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