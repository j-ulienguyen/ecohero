import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,

        width: "100%",
        height: "100%"
    },

    modal: {
        // Position to middle of screen
        top: 140,
        left: 55,

        width: 300,
        height: 375,
        borderRadius: 20,
        backgroundColor: "#F2F2F2",

        // Align content inside
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: 15
    },

    modalHeading: {
        fontFamily: theme.PoppinsBold,
        fontSize: 18,
        color: theme.darkGreen
    },

    badge: {
        marginTop: 10
    },

    badgeDesc: {
        fontFamily: theme.PoppinsRegular,
        fontSize: 14,
        textAlign: "center",
        color: theme.appBlack,

        marginVertical: 10,
        paddingHorizontal: 10
    },

    greenBtn: {
        width: 174,
        height: 43,
        borderRadius: 30,
        backgroundColor: theme.darkGreen,

        justifyContent: "center",
        alignItems: "center"
     },

     btnText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: 2,
        color: theme.white
     }
});

export default styles;