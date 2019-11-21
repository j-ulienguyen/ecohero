import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        // Center all content
        alignItems: "center",
        width: "100%",

        marginTop: 35
    },

    mainHeading: {
        fontFamily: theme.PoppinsBold,
        fontSize: 24,
        color: theme.appBlack
    },

    progressBar: {
        width: 315,
        height: 8,
        borderRadius: 10,

        backgroundColor: theme.lightGray,

        marginTop: 25,
        marginBottom: 50
    },

    checkpointContainer: {
        flexDirection: "row"
    },

    checkpoint: {
        // Align circle + star count
        alignItems: "center"
    },

    progressCheckpoint: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: theme.lightGray,

        bottom: 6
    },

    // Checkpoint Positions
    checkpoint5: { left: 55 },
    checkpoint10: { left: 90 },
    checkpoint20: { left: 200 },

    progressFill: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },

    progressText: {
        fontFamily: theme.PoppinsRegular,
        fontSize: 16,
        textAlign: "center",
        color: theme.appBlack,

        width: "85%"
    },

    boldText: {
        fontFamily: theme.PoppinsBold
    }
});

export default styles;