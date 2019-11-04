import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    hexBadgeContainer: {
        // Centers the content inside the hex badge
        justifyContent: "center",
        alignItems: "center"
    },

    hexBadgeContent: {
        // Centers the content inside the hex badge
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    },

    countText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 24,
        lineHeight: 30,
        color: theme.appBlack
    },

    missionLabel: {
        fontFamily: theme.PoppinsSemibold,
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: 0.5
    },
});

export default styles;