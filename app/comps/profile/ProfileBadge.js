import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

// Import comps & styles below
import styles from '../../styles/ProfileBadgeStyles';
import BadgeModal from '../profile/BadgeModal';

// Navigation
import * as navigateTo from '../../../RouteConstants';


export default function ProfileBadge({badgeName, badgeState, imagePath, disabled, description}){

    const [toggleModal, setToggleModal] = useState(false);

    var badge;
    var badgeModal;


    // Toggle Modal - Click on badge to display
    if (toggleModal === true){
        badgeModal = (
            <Modal isVisible={toggleModal}>
                <BadgeModal
                    badgeName = {badgeName}
                    imagePath = {imagePath}
                    description = {description}
                    onPress = {()=>{
                        setToggleModal(false); // Close modal
                    }}
                />
            </Modal>
        )
    } else {
        badgeModal = null;
    }


    // True = Unlocked
    if(badgeState === true){
        badge = (
            <View style={styles.badgeContainer}>
                {/* Badge Icon */}
                <Image
                    style = {styles.badge}
                    source = {imagePath}
                />
            </View>
        )
    }

    // False = Locked
    if(badgeState === false){
        badge = (
            <View style={styles.badgeContainer}>
                {/* Badge Icon */}
                <Image
                    style = {styles.badge}
                    source = {require('../../assets/imgs/locked-badge.png')}
                />
                {/* Lock Icon */}
                <Image
                    style = {styles.lockIcon}
                    source = {require('../../assets/imgs/lock-icon.png')}
                />
            </View>
        )
    }


    // UI
    return (
        <View style={styles.container}>
            <TouchableOpacity
                disabled={disabled}
                activeOpacity = {0.5}
                onPress={()=>{
                    setToggleModal(!toggleModal);
                }}
            >
                {badge}
                {badgeModal}
            </TouchableOpacity>
        </View>
    );
}
