import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.white
    },

    mainHeading: {
        fontFamily: theme.PoppinsBold,
        fontSize: 24,
        color: theme.appBlack,
        marginBottom: 10
    },

    description: {
        fontFamily: theme.PoppinsRegular,
        fontSize: 16,
        textAlign: "center",
        color: theme.appBlack,
        width: 300
    },

    rewardImage: {
        marginVertical: 25
    },

    earnedText: {
        fontFamily: theme.PoppinsBold,
        fontSize: 18,
        color: theme.appBlack
    }
});

export default styles;