import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        // Position entire card upwards
        // Only want to display portion of BG
        marginTop: -150
    },

    avatarContainer: {
        position: "absolute",
        top: 190,

        flexDirection: "row",
        justifyContent: "center",
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
    },

    settingsIcon: {
        position: "absolute",
        top: 0,

        backgroundColor: "red"
    }
});

export default styles;