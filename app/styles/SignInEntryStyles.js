import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
   container: {
      top: 80,
      justifyContent: "center",
      alignItems: 'center',
   },

   twoFields: {
      flexDirection: "row",
      borderBottomWidth: 1,
      width: 250,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 10,
      borderBottomColor: theme.lightGray
   },

   signInText: {
      fontFamily: theme.PoppinsRegular,
      marginRight: 70
   },

   signUpText: {
      fontFamily: theme.PoppinsRegular
   },

   userInput: {
      top: 25,
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
      top: 40,
      flexDirection: 'row',
      borderBottomWidth: 1,
      width: 309,
      borderBottomColor: theme.lightGray
   },

   greenBtn: {
      width: 309,
      height: 43,
      borderRadius: 30,
      backgroundColor: theme.darkGreen,
      justifyContent: "center",
      alignItems: "center",
      top: 70
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
      top: 85
   }
});

export default styles;