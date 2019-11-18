import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
   container: {
      marginTop: 25,
      justifyContent: "center",
      alignItems: 'center'
   },

   whiteBg: {
      backgroundColor: theme.white
   },

   space: {
      marginTop:60,
   },

   userInput: {
      top: 0,
      flexDirection: 'row',
      borderBottomWidth: 1,
      width: 309,
      borderBottomColor: theme.lightGray
   },

   inputIcon: {
      marginRight: 20,
      marginLeft: 15,
      bottom: -12
   },

   passInput: {
      top: 20,
      flexDirection: 'row',
      borderBottomWidth: 1,
      width: 309,
      borderBottomColor: theme.lightGray
   },

   btmText: {
      textAlign:'center',
      fontFamily: theme.RobotoLight,
      fontSize: 14,
      top: 15
   },

   errorMsg: {
      flex:1,
      position:"absolute",
      top:60,
      right:70,
      color: theme.purple,
   }
});

export default styles;