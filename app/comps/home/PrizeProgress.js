import React from 'react';
import {View, Text, Image, Animated} from 'react-native';

// Import comps & styles below
import styles from '../../styles/PrizeProgressStyles';
import StarCount from '../StarCount';
import theme from '../../styles/ThemeStyles';


export default function PrizeProgress({progressText, congratsText, progressWidth, checkpoint5, checkpoint10, checkpoint20}){
    // UI
    return (
        <View style={styles.container}>
            {/* Star Prizes Heading */}
            <Text style={styles.mainHeading}>Star Prizes</Text>

            {/* Star Progress Bar */}
            <View style={styles.progressBar}>

                {/* Progress Bar Fill */}
                <View style={[styles.progressFill, {width: progressWidth}]}></View>

                {/* Progress Bar Checkpoints */}
                <View style={styles.checkpointContainer}>
                    {/* Checkpoint 5 Stars */}
                    <View style={[styles.checkpoint, styles.checkpoint5]}>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, {backgroundColor: checkpoint5}]}></View>
                        {/* Star Count Requirement */}
                        <StarCount type="yellow" starCount={5}/>
                    </View>

                    {/* Checkpoint 10 Stars */}
                    <View style={[styles.checkpoint, styles.checkpoint10]}>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, {backgroundColor: checkpoint10}]}></View>
                        {/* Star Count Requirement */}
                        <StarCount type="yellow" starCount={10}/>
                    </View>

                    {/* Checkpoint 20 Stars */}
                    <View style={[styles.checkpoint, styles.checkpoint20]}>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, {backgroundColor: checkpoint20}]}></View>
                        {/* Star Count Requirement */}
                        <StarCount type="yellow" starCount={20}/>
                    </View>
                </View>
            </View>

            {/* Star Progress Text */}
            {/* <Text style={styles.progressText}>
                You’re <Text style={styles.boldText}>{starRemainder}</Text> away from unlocking the {prizeName}!
            </Text> */}

            <Text style={styles.progressText}>
                {progressText}
                {congratsText}
            </Text>

        </View>
    )
}