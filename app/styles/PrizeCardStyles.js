import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
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

    prizeIcon: {
        width: 45,
        height: 45,

        position: "absolute",
        top: 25,
        left: 19
    },

    starCountContainer: {
        width: 45,

        flexDirection: "row",
        justifyContent: "center",

        position: "absolute",
        top: 78,
        left: 19
    },

    countText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.appBlack
    },

    starIcon: {
        width: 15,
        height: 15,

        top: 2,
        marginLeft: 1
    },

    prizeDetailContainer: {
        width: "70%",

        position: "absolute",
        top: 22,
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