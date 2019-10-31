import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        position: "absolute"
    },

    // cardContainer: {
    //     position: "absolute",
    //     top: 0
    //     left: 0
    // },

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

    hexBadgeContainer: {
        // Centers the content inside the hex badge
        justifyContent: "center",
        alignItems: "center"
    },

    hexBadgeContent: {
        // Centers the content inside the hex badge
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    },

    countText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 24,
        lineHeight: 30,
        color: theme.appBlack
    },

    missionLabel: {
        fontFamily: theme.PoppinsSemibold,
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: 0.5
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
    },

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

export default styles;