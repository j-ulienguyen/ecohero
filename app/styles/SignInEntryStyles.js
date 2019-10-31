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
      width: 266,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 10,
      borderBottomColor: theme.lightGray
   },
 
   signInText: {
      marginRight: 30,
   },
 
   userInput: {
      top: 40,
      flexDirection: 'row',
      paddingBottom: 10,
      borderBottomWidth: 1,
      width: 309,
      borderBottomColor: theme.lightGray
   },
 
   inputIcon: {
      marginRight: 20,
      marginLeft: 10
   },
 
   passInput: {
      top: 70,
      flexDirection: 'row',
      paddingBottom: 10,
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
      top: 100
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
      top: 110
   }
 
 
});

export default styles;