import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // Spacing between cards
        marginBottom: 20
    },

    cardContainer: {
        width: 345,
        height: 105,

        // Adjust dropshadows later using react-native-shadow potentially
        elevation: 4,

        borderRadius: 10,
        backgroundColor: "#FAFAFA"
    },

    missionIcon: {
        width: 45,
        height: 45,

        // Center icon in card
        position: "absolute",
        top: 30,
        left: 20
    },

    expandBtn: {
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

    rewardsContainer: {
        width: 240,
        height: 30,
        borderRadius: 30,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "#DFF0D7"
    },

    rewardsHeading: {
        fontFamily: theme.PoppinsBold,
        fontSize: 12,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: theme.appBlack
    },

    starAmountContainer: {
        flexDirection: "row",
        left: 25
    },

    starAmount: {
        fontFamily: theme.PoppinsSemibold,
        fontSize: 14,
        color: theme.appBlack
    },

    starIcon: {
        width: 15,
        height: 15,

        top: 2,
        marginLeft: 1
    },

    xpText: {
        fontFamily: theme.PoppinsSemibold,
        fontSize: 14,
        color: theme.appBlack
    }
});

export default styles;