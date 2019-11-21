import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    userCardContainer: {
        alignItems: "center",
        flexDirection:'row',
        // elevation:4,
    },

    userName : {
        position:'absolute',
        left:135,

        fontFamily:theme.PoppinsMedium,
        fontSize:14,
        color:'white'
    },

    avatarIcon: {
        width: 40,
        height: 40,

        position:'absolute',
        left:73
    },

    rankNumber: {
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.white,

        position:'absolute',
        left: 43
    },

    starCountContainer: {
        position: "absolute",
        right: 30
    }
});
export default styles;
