import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    avatar: {
        justifyContent: "center",
        alignItems: "center",

        width: 115,
        height: 115,

        // Circle Level Stroke
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "white"
    },

    avatarIcon: {
        width: 95,
        height: 95
    },

    levelContainer: {
        position: "absolute",
        bottom: -10,
        justifyContent: "center",
        alignItems: "center"
    },

    levelBadge: {
        position: "absolute"
    },

    levelText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 14,
        color: theme.white,
        bottom: -2
    }
});

export default styles;