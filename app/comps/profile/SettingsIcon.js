import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';


export default function SettingsIcon({onPress}){
    // UI
    return (
        <TouchableOpacity style={styles.settingsIcon} onPress={onPress}>
            <Image source = {require('../../assets/imgs/settings-icon.png')}/>
        </TouchableOpacity>
    )
}


// COMPONENT STYLING
var styles = StyleSheet.create({
    settingsIcon: {
        position: "absolute",
        top: 15,
        right: 15
    }
});