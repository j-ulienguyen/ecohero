import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/BadgeModalStyles';
import ScreenOverlay from '../ScreenOverlay';
import GreenButton from '../GreenButton';


export default function BadgeModal(props){
	// UI
	return (
		<View style={styles.container}>
			{/* Screen Overlay - Semi Transparent */}
			<ScreenOverlay/>

			{/* Badge Modal */}
			<View style={styles.modal}>
				{/* Badge Name */}
				<Text style={styles.modalHeading}>{props.heading}</Text>

				{/* Badge Icon */}
				<Image
					style = {styles.badge}
					source = {props.imagePath}
				/>

				{/* Badge Description */}
				<Text style={styles.badgeDesc}>{props.description}</Text>

				{/* Done Button */}
				<TouchableOpacity style={styles.greenBtn}>
					<Text style={styles.btnText}>Done</Text>
				</TouchableOpacity>

				{/* <GreenButton title="Done"/> */}
			</View>
		</View>
	)
}