import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },

    // Mission Board - Heading
    mainHeading: {
        fontFamily: theme.PoppinsBold,
        fontSize: 24,
        color: theme.white,

        position: "absolute",
        top: 40,

        textShadowColor: "#36A2D0",
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    },

    missionStatement: {
        fontFamily: theme.PoppinsSemibold,
        fontSize: 16,
        textAlign: "center",
        color: theme.white,
        width: "80%",

        position: "absolute",
        top: 100,

        textShadowColor: "#36A2D0",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3
    },

    cardContainer: {
        position: "absolute",
        top: 190
    },

    filterContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",

        position: "absolute",
        bottom: 1
    },

    filterBtn: {
        // Currently no code needed

        // backgroundColor: "blue",
        // width: 80,
        // height: 45,

        // justifyContent: "flex-end",
        // alignItems: "center"
    },

    filterBtnText: {
        fontFamily: theme.PoppinsRegular,
        fontSize: 14,
        lineHeight: 35, // Adjust spacing between text and borderBottom
        color: theme.white
    },

    filterBtnActive: {
        fontFamily: theme.PoppinsBold,
        borderBottomWidth: 4,
        borderBottomColor: theme.yellowGold
    }
});

export default styles;