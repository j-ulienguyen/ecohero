import {StyleSheet} from 'react-native';
import theme from '../styles/ThemeStyles';

var styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   },

   whiteBg: {
      backgroundColor: theme.white
   },

   headTxt: {
      position: "relative",
      marginTop: 40,
      fontSize: 24,
      fontFamily: theme.PoppinsBold
   },

   subTxt: {
      marginTop: 5,
      width: "80%",
      fontSize: 16,
      fontFamily: theme.PoppinsRegular,
      textAlign: "center",
   },

   btmText: {
      textAlign:'center',
      marginTop: 10,
      textTransform: "uppercase",
      fontFamily: theme.RobotoRegular,
      fontSize: 14
   }
});

export default styles;