import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex:1,
        // Margin of 20 to accommodate Navbar
        marginBottom:20,
    },
    userCardContainer: {
        alignItems: "center",
        flexDirection:'row',
        flex:1,
        elevation:4,
    },

    // Leaderboard - User Card PNG
    userCard : {
        position:"absolute",
        bottom:20,
    },

    userName : {
        position:'absolute',
        bottom:30,
        left:135,
        fontFamily:theme.PoppinsMedium,
        fontSize:14,
        color:'white',
    },

    starIcon: {
        width: 15,
        height: 15,

        top: 0,
        // left:30,
        marginLeft: 0
    },

    avatarIcon: {
        width: 40,
        height: 40,
        position:'absolute',
        // 73 is looking more visually aligned than 75
        left:73,
        bottom:25,

    },

    rankNumber: {
        position:'absolute',
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.white,
        // 43 is looking more visually aligned than 45
        marginLeft:43
    },

    starAmount: {
        position:'absolute',
        // 83 is looking more visually aligned than 85
        right: 100,
        fontFamily: theme.PoppinsBold,
        color: theme.white,
        paddingHorizontal:10,
    },

    starIcon: {
        width: 15,
        height: 15,

        top:0,
        right:83,
        marginLeft: 0
    },

    starCountContainer: {
        position: "absolute",
        right: 30
    }
});
export default styles;
