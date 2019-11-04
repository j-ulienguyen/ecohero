import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // Spacing between cards
        marginBottom: 20
    },

    cardContainer: {
        width: 345,
        height: 110,

        elevation: 4,

        borderRadius: 10,
        // backgroundColor: theme.darkGreen,

        justifyContent: "center"
    },

    countContainer: {
        width: 50,
        height: 70,
        borderRadius: 7,

        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 15
    },

    countText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 24,
        lineHeight: 30,
        color: theme.white,
    },

    achievementIcon: {
        // Currently no code needed
    },

    achievementDetailContainer: {
        width: "75%",
        height: "100%",

        justifyContent: "center",
        alignItems: "flex-start",
        left: 80
    },

    achievementName: {
        fontFamily: theme.PoppinsBold,
        fontSize: 16,
        color: theme.white
    },

    achievementDesc: {
        fontFamily: theme.RobotoRegular,
        fontSize: 15,
        color: theme.white
    }
});

export default styles;