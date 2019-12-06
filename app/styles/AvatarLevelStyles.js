import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    avatar: {
        justifyContent: "center",
        alignItems: "center",
        bottom: 7
        // width: 115,
        // height: 115,

        // Circle Level Stroke
        // borderRadius: 100,
        // borderWidth: 5,
        // borderColor: "white"
    },

    progressCircle: {
        transform: [{rotateZ: '180deg'}],
        position: "absolute",
        // bottom: 0
    },

    avatarIcon: {
        width: 95,
        height: 95,
        left: 0.5,
        top: 0.1
    },

    levelContainer: {
        position: "absolute",
        bottom: -16,
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