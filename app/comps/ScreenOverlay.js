import React from 'react';
import {View, StyleSheet} from 'react-native';


export default function ScreenOverlay(){
    // UI
    return (
        <View style={styles.screenOverlay}></View>
    )
}


var styles = StyleSheet.create({
    screenOverlay: {
        position: "absolute",
        top: 0,
        left: 0,

        width: "100%",
        height: "100%",
        backgroundColor: "#4F4F4F",
        opacity: 0.55
    }
});