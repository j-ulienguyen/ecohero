import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
    },

    // Leaderboard  - User Car
    container: {
        alignItems: "center",
        // Spacing between cards
        marginBottom: 20
    },

    friendCardContainer: {
        flex:1,
        width: 345,
        height: 65,
        alignItems:'center',


        // Adjust dropshadows later using react-native-shadow potentially
        elevation: 4,

        borderRadius: 10,
        backgroundColor: "#FAFAFA"
    },

    avatarIcon: {
        width: 40,
        height: 40,

        // Center icon in card
        alignItems:'center',
        position: "absolute",
        top: 10,
        left: 30
    },
});

export default styles;