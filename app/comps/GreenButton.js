import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// Import comps & styles below
import theme from '../styles/ThemeStyles';


export default function GreenButton(props){
    // UI
    return (
        <TouchableOpacity
            style = {styles.greenBtn}
        >
            <Text style={styles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    )
}


var styles = StyleSheet.create({
    greenBtn: {
        width: 309,
        height: 43,
        borderRadius: 30,
        backgroundColor: theme.darkGreen,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },

    btnText: {
    fontFamily: theme.PoppinsBold,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: theme.white
    }
});