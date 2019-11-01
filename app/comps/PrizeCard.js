import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../styles/PrizeCardStyles';


export default function PrizeCard(){
    // UI
    return (
        <View style={styles.container}>
            {/* Prize Card */}
            <View style={styles.cardContainer}>
                {/* Prize Icon */}
                <Image
                    style = {styles.prizeIcon}
                    source = {require('../assets/imgs/bronze-prize.png')}
                />

                {/* Star Count Requirement */}
                <View style={styles.starCountContainer}>
                    {/* Star Count # */}
                    <Text style={styles.countText}>20</Text>
                    <Image
                        style = {styles.starIcon}
                        source = {require('../assets/imgs/star-icon.png')}
                    />
                </View>

                {/* Prize Details */}
                <View style={styles.prizeDetailContainer}>
                    {/* Prize Name */}
                    <Text style={styles.prizeName}>Bronze Prize</Text>
                    {/* Prize Description */}
                    <Text style={styles.prizeDesc}>Awesome! You get to redeem an extra 5 minutes in recess.</Text>
                </View>
            </View>
        </View>
    )
}