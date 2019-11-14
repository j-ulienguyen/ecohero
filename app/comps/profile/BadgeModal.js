import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/BadgeModalStyles';
import GreenButton from '../GreenButton';

// Navigation
import * as navigateTo from '../../../RouteConstants';


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
				<GreenButton title="Done" width={174} height={43} onPress={onPress}/>
				{/* <GreenButton title="Done" width={174} height={43} onPress={navigateTo.Back}/> */}
			</View>
		</View>
	)
}