import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    friendsCardContainer: {
        width: 240,
        height: 100,
        borderRadius: 30,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 0,
    },

    userName: {
        fontFamily: theme.PoppinsMedium,
        fontSize: 14,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: theme.appBlack,
        marginLeft:20,
    },

    starAmountContainer: {
        flexDirection: "row",
        left: 25,
    },

    starAmount: {
        fontFamily: theme.PoppinsSemibold,
        fontSize: 14,
        color: theme.appBlack
    },

    starIcon: {
        width: 15,
        height: 15,

        top: 0,
        left:50,
        marginLeft: 1
    },

    starAmount: {
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.appBlack
    },
    rankNumber: {
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.appBlack
    }
});

export default styles;