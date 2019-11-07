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
      top: 20,
      fontSize: 24,
      fontFamily: theme.PoppinsBold
   },

   subTxt: {
      top: 30,
      width: "70%",
      fontSize: 16,
      fontFamily: theme.PoppinsRegular,
      textAlign: "center",
   },

   greenBtn: {
      width: 309,
      height: 43,
      borderRadius: 30,
      backgroundColor: theme.darkGreen,
      position: "relative",
      top: 180,
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
      top: 190,
      textTransform: "uppercase",
      fontFamily: theme.RobotoRegular,
      fontSize: 14
   }
});

export default styles;