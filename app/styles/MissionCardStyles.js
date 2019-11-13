import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // Spacing between cards
        marginBottom: 20
    },

    cardContainer: {
        flex: 0,
        width: 345,
        height: 105,

        elevation: 4,
        borderRadius: 10,
        backgroundColor: "#FAFAFA",

        // Extra space on bottom of card
        paddingBottom: 45
    },

    bonusRibbon: {
        position: "absolute",
        top: -4,
        left: -4
    },

    missionIcon: {
        width: 45,
        height: 45,

        // Center icon in card
        position: "absolute",
        top: 30,
        left: 20
    },

    toggleBtn: {
        position: "absolute",
        top: 15,
        right: 15
    },

    missionDetailContainer: {
        top: 20,
        left: 85
    },

    missionName: {
        fontFamily: theme.PoppinsBold,
        fontSize: 16,
        color: theme.appBlack,

        marginLeft: 10
    },

    missionDesc: {
        fontFamily: theme.RobotoRegular,
        fontSize: 15,
        lineHeight: 22,

        width: 250, // Max width of content
        marginTop: 15
    }
});

export default styles;