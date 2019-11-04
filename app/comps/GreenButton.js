import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

// Import comps & styles below
import theme from '../styles/ThemeStyles';


export default function GreenButton(props){
    // UI
    return (
        <TouchableOpacity
            style={[styles.greenBtn,
                {width: props.width,
                height: props.height,
                marginTop: props.marginTop}
            ]}
        >
            <Text style={styles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    )
}


// COMPONENT STYLING
var styles = StyleSheet.create({
    greenBtn: {
        borderRadius: 30,
        backgroundColor: theme.darkGreen,
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