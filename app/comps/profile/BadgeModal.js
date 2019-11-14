import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/BadgeModalStyles';
import GreenButton from '../GreenButton';


export default function BadgeModal({badgeName, imagePath, description, onPress}){

	// UI
	return (
		<View style={styles.container}>
			{/* Badge Modal */}
			<View style={styles.modal}>
				{/* Badge Name */}
				<Text style={styles.modalHeading}>{badgeName}</Text>

				{/* Badge Icon */}
				<Image
					style = {styles.badge}
					source = {imagePath}
				/>

				{/* Badge Description */}
				<Text style={styles.badgeDesc}>{description}</Text>

				{/* Done Button */}
				{/* Function to close modal is inside ProfileBadge.js */}
				<GreenButton title="Done" width={174} height={43} onPress={onPress}/>
			</View>
		</View>
	)
}