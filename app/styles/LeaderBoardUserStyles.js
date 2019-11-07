import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex:1,
        backgroundColor:"black",
    },

    // Leaderboard - User Card
    userCard : {
        position:"relative",
        // temporary fix - -20 to keep it at the bottom
        bottom:-20,
    },

    userName : {
        elevation:10000000,
        justifyContent:"center",
        position:'relative',
        fontFamily:theme.PoppinsBold,
        color:'black',
        height: 200,
        width: 50,
        marginTop: -110,
    }
});
export default styles;