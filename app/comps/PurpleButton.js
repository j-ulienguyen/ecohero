import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

// Import comps & styles below
import theme from '../styles/ThemeStyles';


export default function PurpleButton({width, height, marginTop, title, onPress}){
    // UI
    return (
        <TouchableOpacity
            style={[styles.purpleBtn, {width: width, height: height, marginTop: marginTop}]}
            onPress = {onPress}
        >
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}


// COMPONENT STYLING
var styles = StyleSheet.create({
    purpleBtn: {
        borderRadius: 30,
        backgroundColor: "#8853DD",
        justifyContent: "center",
        alignItems: "center"
    },

    btnText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: 2,
        color: theme.white
    }
});