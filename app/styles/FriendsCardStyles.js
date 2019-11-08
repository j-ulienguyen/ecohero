import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginBottom:15,
        elevation:4,
    },

    friendsCardContainer: {
        width: 345,
        height: 70,
        borderRadius: 10,
        elevation:4,

        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 0,
    },

    userName: {
        position:'absolute',
        left:80,
        fontFamily: theme.PoppinsMedium,
        fontSize: 14,
        color: theme.white,
        marginLeft:20,
    },

    starAmountContainer: {
        position:'absolute',
        right:35,
        flexDirection: "row",
    },

    starIcon: {
        width: 15,
        height: 15,

        top: 0,
        // left:30,
        marginLeft: 0
    },

    starAmount: {
        position:'absolute',
        right: 50,
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.appBlack,
        paddingHorizontal:10,
    },
    rankNumber: {
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.appBlack,
        marginLeft:10
    },
    avatarIcon: {
        width: 40,
        height: 40,
        position:'absolute',
        left:40

    },
});

export default styles;