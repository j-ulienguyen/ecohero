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
        backgroundColor: theme.darkGreen,

        justifyContent: "center"
    },

    countContainer: {
        width: 50,
        height: 70,
        borderRadius: 7,

        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 15,

        backgroundColor: "#8AD560" // light green
        // backgroundColor: "#95D5EC" // light blue
    },

    countText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 24,
        lineHeight: 30,
        color: theme.white,
    },

    achievementIcon: {
        // backgroundColor: "red"
        // width: 15,
        // height: 15,
        // top: 2,
        // marginLeft: 1
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