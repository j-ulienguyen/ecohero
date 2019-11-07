import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        // Currently no code needed
    },

    userBubbleContainer: {
        position: "absolute",
        top: 35,

        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },

    badgesContainer: {
        position: "absolute",
        top: 190,

        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        width: "100%"
    },

    avatar: {
        justifyContent: "center",
        alignItems: "center",

        width: 115,
        height: 115,

        // Circle Level Stroke
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "white"
    },

    avatarIcon: {
        width: 95,
        height: 95
    },

    levelContainer: {
        position: "absolute",
        bottom: -10,
        justifyContent: "center",
        alignItems: "center"
    },

    levelBadge: {
        position: "absolute"
    },

    levelText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.white
    }
});

export default styles;