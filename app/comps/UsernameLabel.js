import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Import comps & styles below
import theme from '../styles/ThemeStyles';


export default function UsernameLabel(props){
    // UI
    return (
        <View style={styles.usernameContainer}>
            <Text style={styles.usernameText}>{props.username}</Text>
        </View>
    )
}


var styles = StyleSheet.create({
    usernameContainer: {
        position: "absolute",
        bottom: 15,

        alignItems: "center",
        width: "100%"
    },

    usernameText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 18,
        color: theme.white
    }
});