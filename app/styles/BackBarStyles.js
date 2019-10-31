import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';
 
var styles = StyleSheet.create({

    container: {
       position: "absolute",
       top: 0,
       width: "100%",
       height: 50,
       backgroundColor: theme.darkGreen
    },

    arrow: {
       position: "absolute",
       top: 15,
       left: 20
    },

    backTxt: {
      position: "absolute",
      top: 12,
      left: 40,
      color: "white"
    }

});

export default styles;