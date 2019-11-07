import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/FriendsCardStyles';


export default function FriendsCard(props){


    // UI
    return (
        <View style={[styles.friendsCardContainer, {backgroundColor: props.barBG}]}>

            <Text style={[styles.rankNumber, {color: props.textColor}]}>{props.rankNumber}</Text>
            <Text style={[styles.userName, {color: props.textColor}]}>Username</Text>

            {/* Star Reward Amount */}
            <View style={styles.starAmountContainer}>
                {/* Star Amount # */}
                <Text style={[styles.starAmount, {color: props.textColor}]}></Text>
                <Image
                    style = {styles.starIcon}
                    source = {require('../../assets/imgs/black-star-icon.png')}
                />
            </View>

            {/* XP Reward Amount */}
            {/* Rank Number */}
            <Text style={[styles.starAmount, {color: props.textColor}]}>{props.starAmount}</Text>
        </View>
    )
}