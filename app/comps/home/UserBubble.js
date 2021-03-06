import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../../styles/UserBubbleStyles';

// Navigation
import * as navigateTo from '../../../RouteConstants';


export default function UserBubble({username, missionAvailable}){
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
                    <Text style={styles.heyUser}>Hey, {username}!</Text>
                    <Text style={styles.missionText}>You have <Text style={styles.missionNumber}>{missionAvailable}</Text> available missions</Text>

                    {/* View Mission Button */}
                    <TouchableOpacity
                        style = {styles.blueBtn}
                        activeOpacity = {0.75}
                        onPress = {navigateTo.Missions}
                    >
                        <Text style={styles.btnText}>View Missions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}