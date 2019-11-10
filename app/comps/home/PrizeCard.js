import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/PrizeCardStyles';
import StarCount from '../StarCount';


export default function PrizeCard(props){
    // UI
    return (
        <View style={styles.container}>
            {/* Prize Card */}
            <View style={styles.cardContainer}>
                {/* Prize Icon */}
                <Image
                    style = {styles.prizeIcon}
                    source = {props.imagePath}
                />
                {/* Lock Icon */}
                <Image
                    style = {styles.lockIcon}
                    source = {props.lockIcon}
                />

                {/* Star Count Requirement */}
                <View style={styles.starCountContainer}>
                    <StarCount type="yellow" starCount={props.starCount}/>
                </View>

                {/* Prize Details */}
                <View style={styles.prizeDetailContainer}>
                    {/* Prize Name */}
                    <Text style={styles.prizeName}>{props.prizeName}</Text>
                    {/* Prize Description */}
                    <Text style={styles.prizeDesc}>{props.description}</Text>
                </View>
            </View>
        </View>
    )
}