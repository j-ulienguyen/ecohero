import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/MotivationCardStyles';


export default function MotivationCard(){
    // UI
    return (
        <View style={styles.container}>
            {/* Content inside Card*/}
            <View style={styles.cardContent}>
                <Text style={styles.cardHeading}>Keep it up!</Text>
                <Text style={styles.cardText}>Complete missions to earn more rewards for prizes.</Text>
            </View>

            {/* EcoHero Character */}
            <Image
                style = {styles.character}
                source = {require('../../assets/imgs/ecohero-handsup.png')}
            />
        </View>
    )
}