import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },

    character: {
        alignSelf: "flex-end"
    },

    bubbleContent: {
        position: "absolute",
        top: 12,
        left: 37
    },

    heyUser: {
        fontFamily: theme.PoppinsBold,
        fontSize: 17,
        color: theme.darkGreen
    },

    missionText: {
        fontFamily: theme.RobotoRegular,
        fontSize: 14,
        color: theme.appBlack,

        marginVertical: 7,
    },

    missionNumber: {
        fontFamily: theme.RobotoRegular,
        fontWeight: "bold",
        color: theme.blue
    },

    blueBtn: {
        width: 193,
        height: 30,

        borderRadius: 30,
        backgroundColor: theme.blue,

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