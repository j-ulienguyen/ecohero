import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },

    modal: {
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
        marginTop: 10,
        marginBottom: 5
    },

    badgeDesc: {
        fontFamily: theme.PoppinsRegular,
        fontSize: 14,
        textAlign: "center",
        color: theme.appBlack,

        marginVertical: 10,
        paddingHorizontal: 17
    }
});

export default styles;