import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

// Import comps & styles below
import theme from '../styles/ThemeStyles';


export default function StarCount(props){

    // var iconPath = '../assets/imgs/star-icon.png';

    var starIcon;

    if (props.type === "yellow"){
        starIcon = (
            <Image
                style = {styles.starIcon}
                source = {require('../assets/imgs/star-icon.png')}
            />
        )
    }

    if (props.type === "black"){
        starIcon = (
            <Image
                style = {styles.starIcon}
                source = {require('../assets/imgs/black-star-icon.png')}
            />
        )
    }


    // UI
    return (
        <View style={styles.starCountContainer}>
            {/* Star Count # */}
            <Text style={[styles.countText, {color: props.textColor}]}>{props.starCount}</Text>
            {starIcon}
            {/* <Image
                style = {styles.starIcon}
                source = {require('../assets/imgs/star-icon.png')}
            /> */}
        </View>
    )
}


// COMPONENT STYLING
var styles = StyleSheet.create({
    starCountContainer: {
        width: 45,

        flexDirection: "row",
        justifyContent: "center"
    },

    countText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.appBlack
    },

    starIcon: {
        width: 15,
        height: 15,

        top: 2,
        marginLeft: 1
    }
});