import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        width: 315,
        height: 100,
        borderRadius: 10,
        backgroundColor: theme.white,
        flexDirection: "row",
        elevation: 4
    },

    cardContent: {
        justifyContent: "center",
        left: 20
    },

    cardHeading: {
        fontFamily: theme.PoppinsBold,
        fontSize: 17,
        color: theme.blue
    },

    cardText: {
        fontFamily: theme.RobotoRegular,
        fontSize: 14,
        lineHeight: 20,
        color: theme.appBlack,
        width: 210
    },

    character: {
        position: "absolute",
        bottom: 10,
        right: -10
    }
});

export default styles;