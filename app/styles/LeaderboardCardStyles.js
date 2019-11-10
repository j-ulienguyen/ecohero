import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent:"center",
    },

    // Leaderboard - Heading
    mainHeading: {
        fontFamily: theme.PoppinsBold,
        fontSize: 24,
        color: theme.white,

        position: "absolute",
        top: 40,

        textShadowColor: "#895dd4",
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    },

    subHeading: {
        fontFamily: theme.PoppinsSemibold,
        fontSize: 24,
        color: theme.white,

        position: "absolute",
        top: 100,

        textShadowColor: "#895dd4",
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    },

    timePeriod: {
        fontFamily: theme.PoppinsSemibold,
        fontSize: 14,
        color: theme.white,

        position: "absolute",
        top: 150,

        textShadowColor: "#895dd4",
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    },

    reset30days: {
        fontFamily: theme.RobotoRegular,
        fontSize: 14,
        color: theme.white,

        position: "absolute",
        top: 175,

        textShadowColor: "#895dd4",
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    }
});

export default styles;
