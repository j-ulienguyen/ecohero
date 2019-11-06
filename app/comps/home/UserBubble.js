import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../../styles/UserBubbleStyles';


export default function UserBubble(props){
    // UI
    return (
        <View style={styles.container}>
            {/* EcoHero Character */}
            <Image
                style = {styles.character}
                source = {require('../../assets/imgs/ecohero-wave.png')}
            />

            {/* User Speech Bubble */}
            <View>
                {/* Speech Bubble Shape */}
                <Image
                    style = {styles.speechBubble}
                    source = {require('../../assets/imgs/speech-bubble.png')}
                />

                {/* Content inside Speech Bubble*/}
                <View style={styles.bubbleContent}>
                    {/* Username can only be MAX 14 char */}
                    <Text style={styles.heyUser}>Hey, {props.username}!</Text>
                    <Text style={styles.missionText}>You have <Text style={styles.missionNumber}>{props.missionAvailable}</Text> available missions</Text>

                    {/* View Mission Button */}
                    <TouchableOpacity
                        style = {styles.blueBtn}
                        /* onPress = {} */
                    >
                        <Text style={styles.btnText}>View Missions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}