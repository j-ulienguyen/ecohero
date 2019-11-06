import React from 'react';
import {View, Text, Image, Animated} from 'react-native';

// Import comps & styles below
import styles from '../../styles/PrizeProgressStyles';
import StarCount from '../StarCount';


export default function PrizeProgress(props){
    // UI
    return (
        <View style={styles.container}>
            {/* Star Prizes Heading */}
            <Text style={styles.mainHeading}>Star Prizes</Text>

            {/* Star Progress Bar */}
            <View style={styles.progressBar}>
                {/* TBD - Figure out how to animate the progress bar following tutorial */}

                {/* Progress Bar Checkpoints */}
                <View style={styles.checkpointContainer}>
                    {/* Checkpoint 5 Stars */}
                    <View style={[styles.checkpoint, styles.checkpoint5]}>
                        {/* Checkpoint Circle */}
                        <View style={styles.progressCheckpoint}></View>
                        {/* Star Count Requirement */}
                        <StarCount starCount={5}/>
                    </View>

                    {/* Checkpoint 10 Stars */}
                    <View style={[styles.checkpoint, styles.checkpoint10]}>
                        {/* Checkpoint Circle */}
                        <View style={styles.progressCheckpoint}></View>
                        {/* Star Count Requirement */}
                        <StarCount starCount={10}/>
                    </View>

                    {/* Checkpoint 20 Stars */}
                    <View style={[styles.checkpoint, styles.checkpoint20]}>
                        {/* Checkpoint Circle */}
                        <View style={styles.progressCheckpoint}></View>
                        {/* Star Count Requirement */}
                        <StarCount starCount={20}/>
                    </View>
                </View>
            </View>

            {/* Star Progress Text */}
            <Text style={styles.progressText}>You’re <Text style={styles.boldText}>{props.starRemainder}</Text> away from unlocking the {props.prizeName}!</Text>

            {/* Progress Text Statements */}
            {/* <Text style={styles.progressText}>{props.progressText}</Text> */}
        </View>
    )
}