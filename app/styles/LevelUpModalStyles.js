import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,

        width: "100%",
        height: "100%"
    },

    modal: {
        // Position to middle of screen
        top: 150,
        left: 55,

        width: 300,
        height: 350,
        borderRadius: 20,
        backgroundColor: "#F2F2F2",

        // Align content inside
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: 20
    },

    modalHeading: {
        fontFamily: theme.PoppinsBold,
        fontSize: 18,
        color: theme.darkGreen
    },

    badgeContainer: {
        alignItems: "center",
        top: 15
    },

    levelupBadge: {
        // Currently no code needed
    },

    levelText: {
        fontFamily: theme.PoppinsExtrabold,
        fontSize: 50,
        color: theme.white,

        // Position # inside badge
        position: "absolute",
        top: 18
    }
});

export default styles;