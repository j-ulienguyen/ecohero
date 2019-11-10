import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white
    },

    prizeSection: {
        justifyContent: "center",
        width: "100%",

        marginTop: 35,
        marginBottom: 20
    }
});

export default styles;