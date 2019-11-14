import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white,
        paddingBottom: 50
    },

    centerContent: {
        alignItems: "center"
        // backgroundColor: "red"
    },

    achievementSection: {
        justifyContent: "center",
        width: "100%",

        marginTop: 35,
        marginBottom: 20
    },

    badgeSection: {
        width: "80%",
        justifyContent: "center"
    },

    sectionHeading: {
        fontFamily: theme.PoppinsBold,
        fontSize: 18,
        color: theme.appBlack,

        width: 75,
        borderBottomWidth: 4,
        borderBottomColor: theme.lightGreen,
    },

    badgeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginVertical: 30
    }
});

export default styles;