import React from 'react';
import {View, Text, Image, Animated} from 'react-native';

// Import comps & styles below
import styles from '../styles/PrizeProgressStyles';


export default function PrizeProgress(){
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
                    <View>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, styles.checkpoint5]}></View>
                        {/* Star Count Requirement */}
                        <View style={[styles.starCountContainer, {left: 65}]}>
                            {/* Star Count # */}
                            <Text style={styles.countText}>5</Text>
                            <Image
                                style = {styles.starIcon}
                                source = {require('../assets/imgs/star-icon.png')}
                            />
                        </View>
                    </View>

                    {/* Checkpoint 10 Stars */}
                    <View>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, styles.checkpoint10]}></View>
                        {/* Star Count Requirement */}
                        <View style={[styles.starCountContainer, {left: 122}]}>
                            {/* Star Count # */}
                            <Text style={styles.countText}>10</Text>
                            <Image
                                style = {styles.starIcon}
                                source = {require('../assets/imgs/star-icon.png')}
                            />
                        </View>
                    </View>

                    {/* Checkpoint 20 Stars */}
                    <View>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, styles.checkpoint20]}></View>
                        {/* Star Count Requirement */}
                        <View style={[styles.starCountContainer, {left: 245}]}>
                            {/* Star Count # */}
                            <Text style={styles.countText}>20</Text>
                            <Image
                                style = {styles.starIcon}
                                source = {require('../assets/imgs/star-icon.png')}
                            />
                        </View>
                    </View>
                </View>
            </View>

            {/* Star Progress Text */}
            <Text style={styles.progressText}>You’re <Text style={styles.boldText}>5 stars</Text> away from unlocking the Silver Prize!</Text>
        </View>
    )
}