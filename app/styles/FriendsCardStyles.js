import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginBottom:15,
        // elevation:4,
    },

    friendsCardContainer: {
        width: 347,
        height: 70,
        borderRadius: 10,

        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 0,

        //borderColor: "transparent"
    },

    userName: {
        position:'absolute',
        left:80,
        fontFamily: theme.PoppinsMedium,
        fontSize: 14,
        color: theme.white,
        marginLeft:20,
    },

    starCountContainer: {
        position: "absolute",
        right: 12
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