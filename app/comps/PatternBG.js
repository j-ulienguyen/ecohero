import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../styles/PatternBGStyles';


export default function PatternBG(){
    // UI
    return (
        <View style={styles.container}>
            <Image
                style = {styles.patternBG}
                resizeMode = "cover"
                source = {require('../assets/imgs/pattern-bg.png')}
            />
        </View>
    )
}