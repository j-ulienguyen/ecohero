import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex:1,
    },

    // Leaderboard  - User Card

    userCard : {
        position:"relative",
        // temporary fix 
        bottom:-250,
    }

});
export default styles;