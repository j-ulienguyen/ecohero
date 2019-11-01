import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    rewardsContainer: {
        width: 240,
        height: 30,
        borderRadius: 30,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "#8AD560"
    },

    rewardsHeading: {
        fontFamily: theme.PoppinsBold,
        fontSize: 12,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: theme.white
    },

    starAmountContainer: {
        flexDirection: "row",
        left: 25
    },

    starAmount: {
        fontFamily: theme.PoppinsSemibold,
        fontSize: 14,
        color: theme.white
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
        color: theme.white
    }
});

export default styles;