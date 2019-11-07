import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // Spacing between cards
        marginBottom: 20
    },

    cardContainer: {
        width: 345,
        height: 105,

        // Adjust dropshadows later using react-native-shadow potentially
        elevation: 4,

        borderRadius: 10,
        backgroundColor: "#FAFAFA"
    },

    bonusRibbon: {
        position: "absolute",
        top: -4,
        left: -4
    },

    missionIcon: {
        width: 45,
        height: 45,

        // Center icon in card
        position: "absolute",
        top: 30,
        left: 20
    },

    expandBtn: {
        position: "absolute",
        top: 15,
        right: 15
    },

    missionDetailContainer: {
        top: 20,
        left: 85
    },

    missionName: {
        fontFamily: theme.PoppinsBold,
        fontSize: 16,
        color: theme.appBlack,

        marginLeft: 10
    }
});

export default styles;