import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
   container: {
      // flex: 1,
      justifyContent: "center",
      alignItems: "center",
      top: 170
   },

   whiteBg: {
      backgroundColor: theme.white
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
      // top: 10
   },

   entryCont: {
      position: "absolute",
      top: 70,
      justifyContent: "center",
      alignItems: "center"
      // bottom: 400
   },

   fieldInput: {
      // top: 320,
      // left: 50,
      width: 309,
      marginBottom: 10,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: theme.lightGray
   },

   btmText: {
      textAlign:'center',
      top: 240
   }
});

export default styles;