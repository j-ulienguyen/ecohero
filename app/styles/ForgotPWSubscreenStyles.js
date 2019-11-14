import {StyleSheet} from 'react-native';
import theme from '../styles/ThemeStyles';

var styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      top: 210
   },

   headTxt: {
      top: 20,
      fontSize: 18,
      fontWeight: "bold"
   },

   subTxt: {
      fontSize: 16,
      textAlign: "center",
      width: "80%",
      top: 30
   },

   emailInput: {
      top: 390,
      left: 50,
      width: 309,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: theme.lightGray
   },

   inputIcon: {
      marginRight: 20,
      marginLeft: 15,
      bottom: -12
   },

   btmText: {
      textAlign:'center',
      top: 15
   }
});

export default styles;