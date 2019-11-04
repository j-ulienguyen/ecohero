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
      top: 250,
      fontSize: 24,
      fontFamily: theme.PoppinsBold
   },

   subTxt: {
      top: 260,
      width: "70%",
      fontSize: 16,
      fontFamily: theme.PoppinsRegular,
      textAlign: "center",
   },

   greenBtn: {
      width: 100,
      height: 43,
      borderRadius: 30,
      backgroundColor: theme.darkGreen,
      position: "relative",
      top: 400,
      justifyContent: "center",
      alignItems: "center"
   },

   navContainer: {
      left: 270,
      bottom: -150
   },
   
   btnText: {
      fontFamily: theme.PoppinsBold,
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: 2,
      color: theme.white
   },

   btmText: {
      textAlign:'center',
      top: 400,
      textTransform: "uppercase",
      fontFamily: theme.PoppinsBold,
      fontSize: 14,
      right: 400,
      top: 370
   },

});

export default styles;