import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


export default function SettingsIcon(){
    // UI
    return (
        <TouchableOpacity
            style = {styles.settingsIcon}
        >
            <Image
                source = {require('../../assets/imgs/settings-icon.png')}
            />
        </TouchableOpacity>
    )
}


var styles = StyleSheet.create({
    settingsIcon: {
        position: "absolute",
        top: 15,
        right: 15
    }
});