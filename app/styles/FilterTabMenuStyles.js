import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    filterContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",

        position: "absolute",
        bottom: 1
    },

    filterBtn: {
        // Currently no code needed
    },

    filterBtnText: {
        fontFamily: theme.PoppinsRegular,
        fontSize: 14,
        lineHeight: 35, // Adjust spacing between text and borderBottom
        color: theme.white
    },

    filterBtnActive: {
        fontFamily: theme.PoppinsBold,
        borderBottomWidth: 4,
        borderBottomColor: theme.yellowGold
    }
});

export default styles;