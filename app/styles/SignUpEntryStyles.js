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

   lineLeft: {
      width: 125,
      height: 3,
      backgroundColor: theme.lightGreen,position: "absolute",
      left: -40,
      top: 28
   },

   rightLeft: {
      width: 125,
      height: 3,
      backgroundColor: theme.lightGreen,position: "absolute",
      right: -40,
      top: 28
   },

   signInText: {
      fontFamily: theme.PoppinsRegular,
   },

   signUpText: {
      fontFamily: theme.PoppinsRegular,
      marginLeft: 70
   },

   activeTxt: {
      fontFamily: theme.PoppinsMedium,
      color: theme.darkGreen,
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
   }
});

export default styles;