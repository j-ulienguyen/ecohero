import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/PrizeCardStyles';
import StarCount from '../StarCount';


export default function PrizeCard({imagePath, lockIconPath, starCount, prizeName, description, status}){

    if(status === true){

    }

    // UI
    return (
        <View style={styles.container}>
            {/* Prize Card */}
            <View style={styles.cardContainer}>
                {/* Prize Icon */}
                <Image
                    style = {styles.prizeIcon}
                    source = {imagePath}
                />
                {/* Lock Icon */}
                <Image
                    style = {styles.lockIcon}
                    source = {lockIconPath}
                />

                {/* Star Count Requirement */}
                <View style={styles.starCountContainer}>
                    <StarCount type="yellow" starCount={starCount}/>
                </View>

                {/* Prize Details */}
                <View style={styles.prizeDetailContainer}>
                    {/* Prize Name */}
                    <Text style={styles.prizeName}>{prizeName}</Text>
                    {/* Prize Description */}
                    <Text style={styles.prizeDesc}>{description}</Text>
                </View>
            </View>
        </View>
    )
}