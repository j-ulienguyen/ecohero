import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
//import Modal from 'react-native-modal';

// Import comps & styles below
import styles from '../../styles/LevelUpModalStyles';
import ScreenOverlay from '../ScreenOverlay';
import GreenButton from '../GreenButton';


export default function LevelUpModal({level, onPress}){

	// UI
	return (
		//<Modal isVisible={toggleModal}>
			<View style={styles.container}>
				{/* Screen Overlay - Semi Transparent */}
				{/* <ScreenOverlay/> */}

				{/* Level Up Modal */}
				<View style={styles.modal}>
					{/* Modal Heading */}
					<Text style={styles.modalHeading}>You Leveled Up!</Text>

					{/* Level Up Badge */}
					<View style={styles.badgeContainer}>
						<Image
							style = {styles.levelupBadge}
							source = {require('../../assets/imgs/levelup-badge.png')}
						/>
						<Text style={styles.levelText}>{level}</Text>
					</View>

					{/* Done Button */}
					<GreenButton title="Done" width={174} height={43} marginTop={50} onPress={onPress}/>
				</View>
			</View>
		//</Modal>
	)
}