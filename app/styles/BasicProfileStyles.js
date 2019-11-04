import {StyleSheet} from 'react-native';
import theme from '../styles/ThemeStyles';

var styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      top: 170
   },

   headTxt: {
      top: 0,
      fontSize: 24,
      fontFamily: theme.PoppinsBold
   },

   subTxt: {
      fontSize: 16,
      textAlign: "center",
      fontFamily: theme.PoppinsRegular,
      top: 10
   },

   entryCont: {
      position: "relative",
      top: -100
   },

   fieldInput: {
      top: 320,
      left: 50,
      width: 309,
      marginBottom: 10,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: theme.lightGray
   },

   greenBtn: {
      width: 309,
      height: 43,
      borderRadius: 30,
      backgroundColor: theme.darkGreen,
      position: "relative",
      top: 90,
      justifyContent: "center",
      alignItems: "center"
   },

   btnText: {
      fontFamily: theme.PoppinsBold,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 2,
      color: theme.white
   },

   btmText: {
      textAlign:'center',
      top: 240
   }
});

export default styles;