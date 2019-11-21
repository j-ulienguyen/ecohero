import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        position: "absolute",
        bottom: 0,
        paddingHorizontal: 40,

        width: "100%",
        height: 70,
        backgroundColor: "#F2F2F2", // Bar Color
    },

    navBtn: {
        alignItems: "center"
    },

    navIcon: {
        height: 22,
        width: 22
    },

    navLabel: {
        fontFamily: theme.RobotoRegular,
        fontSize: 13,
        color: "#BDBDBD", // Default color
        marginTop: 3
    },

    navLabelActive: {
        fontFamily: theme.RobotoRegular,
        fontSize: 13,
        color: theme.darkGreen, // Active color
        marginTop: 3
    }
});

export default styles;