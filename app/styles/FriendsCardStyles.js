import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    friendsCardContainer: {
        width: 345,
        height: 70,
        borderRadius: 10,

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

    starIcon: {
        width: 15,
        height: 15,

        top: 0,
        left:30,
        marginLeft: 0
    },

    starAmount: {
        position:'relative',
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.appBlack,
        paddingHorizontal:10,
    },
    rankNumber: {
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.appBlack
    }
});

export default styles;