import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        // Center all content
        alignItems: "center",
        width: "100%",

        marginTop: 35
    },

    progressBar: {
        width: 240,
        height: 8,
        borderRadius: 10,
        position: "absolute",
        top: 70,
        backgroundColor: theme.lightGray
    },

    checkpointContainer: {
        flexDirection: "row"
    },

    progressCheckpoint: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: theme.lightGray,

        bottom: 6
    },

    checkpoint1: {
        left: 0
    },

    checkpoint2: {
        left: 70
    },

    checkpoint3: {
        left: 140
    },

    activeCircle: {
        width: 20,
        height: 20,
        borderRadius: 20,

        bottom: 6,
        backgroundColor: theme.lightGreen,
    },

    inprogressCircle: {
      width: 20,
      height: 20,
      borderRadius: 20,

      bottom: 6,
      backgroundColor: theme.lightGray,
      borderColor: theme.lightGreen,
      borderWidth: 3
    },

    activeLeftLine: {
        width: 120,
        height: 8,
        left: 20,
        borderRadius: 10,
        position: "absolute",
        top: -20,
        backgroundColor: theme.lightGreen
    },

    stepContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },

    stepText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.appBlack
    },

    progressFill: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },

});

export default styles;