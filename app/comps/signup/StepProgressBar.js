import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from '../../styles/StepProgressBarStyles';


export default function StepProgressBar(){
    // UI
    return (
        <View style={styles.container}>

            {/* Step Progress Bar */}
            <View style={styles.progressBar}>

                {/* Progress Bar Steps */}
                <View style={styles.checkpointContainer}>
                    {/* Step 1 */}
                    <View>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, styles.checkpoint1, styles.activeCircle]}></View>
                        {/* Step Count Requirement */}
                        <View style={[styles.stepContainer, {left: -10}]}>
                            {/* Step 1 */}
                            <Text style={styles.stepText}>Step 1</Text>
                              {/* Active Green Line */}
                              <View style={styles.activeLeftLine}></View>
                        </View>
                    </View>

                    {/* Step 2 */}
                    <View>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, styles.checkpoint2, styles.inprogressCircle]}></View>
                        {/* Step Count Requirement */}
                        <View style={[styles.stepContainer, {left: 60}]}>
                            {/* Step 2 */}
                            <Text style={styles.stepText}>Step 2</Text>
                        </View>
                    </View>

                    {/* Step 3 */}
                    <View>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, styles.checkpoint3]}></View>
                        {/* Step Count Requirement */}
                        <View style={[styles.stepContainer, {left: 130}]}>
                            {/* Step 3 */}
                            <Text style={styles.stepText}>Step 3</Text>
                        </View>
                    </View>
                </View>
            </View>


        </View>
    )
}