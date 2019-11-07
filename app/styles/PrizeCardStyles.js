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
        height: 120,

        // Adjust dropshadows later using react-native-shadow potentially
        elevation: 4,

        borderRadius: 10,
        backgroundColor: "#FAFAFA"
    },

    lockIcon: {
        width: 15,
        height: 20,

        position: "absolute",
        top: 36,
        left: 34
    },

    starCountContainer: {
        position: "absolute",
        top: 78,
        left: 19
    },

    prizeIcon: {
        width: 45,
        height: 45,

        position: "absolute",
        top: 25,
        left: 19
    },

    prizeDetailContainer: {
        width: "70%",
        height: "100%",

        justifyContent: "center",
        alignItems: "flex-start",
        left: 82
    },

    prizeName: {
        fontFamily: theme.PoppinsBold,
        fontSize: 16,
        color: theme.appBlack
    },

    prizeDesc: {
        fontFamily: theme.RobotoRegular,
        fontSize: 15,
        color: theme.appBlack
    }
});

export default styles;