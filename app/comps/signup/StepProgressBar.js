import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from '../../styles/StepProgressBarStyles';
import theme from '../../styles/ThemeStyles';


export default function StepProgressBar({checkpoint1, checkpoint2, checkpoint3, width3, border3, progressWidth}){
    // UI
    return (
        <View style={styles.container}>

            {/* Step Progress Bar */}
            <View style={styles.progressBar}>

            {/* Progress Bar Fill */}
            {/* <View style={[styles.progressFill, {width: progressWidth}]}> */}

                {/* Progress Bar Steps */}
                <View style={styles.checkpointContainer}>
                    {/* Step 1 */}
                    <View>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, {backgroundColor: checkpoint1}]}></View>
                        {/* Step Count Requirement */}
                        <View style={[styles.stepContainer, {left: -10}]}>
                            {/* Step 1 */}
                            <Text style={styles.stepText}>Step 1</Text>
                              {/* Active Green Line */}
                              <View style={[styles.activeLeftLine, {width: progressWidth}]}></View>
                        </View>
                    </View>

                    {/* Step 2 */}
                    <View>
                        {/* Checkpoint Circle */}
                        {/* <View style={[styles.progressCheckpoint, styles.checkpoint2]}></View> */}
                        <View style={[styles.progressCheckpoint, {backgroundColor: checkpoint2, left:70, borderWidth:3, borderColor:theme.lightGreen}]}></View>
                        {/* Step Count Requirement */}
                        <View style={[styles.stepContainer, {left: 60}]}>
                            {/* Step 2 */}
                            <Text style={styles.stepText}>Step 2</Text>
                        </View>
                    </View>

                    {/* Step 3 */}
                    <View>
                        {/* Checkpoint Circle */}
                        <View style={[styles.progressCheckpoint, {backgroundColor: checkpoint3, borderWidth: width3, borderColor: border3, left:140}]}></View>
                        {/* Step Count Requirement */}
                        <View style={[styles.stepContainer, {left: 130}]}>
                            {/* Step 3 */}
                            <Text style={styles.stepText}>Step 3</Text>
                        </View>
                    </View>
                </View>

                {/* </View> */}
            </View>


        </View>
    )
}