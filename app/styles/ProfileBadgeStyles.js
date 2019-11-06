import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        // backgroundColor: "gray",
        marginHorizontal: 5,
        marginBottom: 25
    },

    badgeContainer: {
        // Center content inside badge
        justifyContent: "center",
        alignItems: "center"
    },

    badge: {
        width: 84.96,
        height: 75
    },

    lockIcon: {
        position: "absolute"
    }
});

export default styles;