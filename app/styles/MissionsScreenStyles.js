import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white
    },

    cardSection: {
        justifyContent: "center",
        width: "100%",

        marginTop: 40,
        marginBottom: 90
    }
});

export default styles;