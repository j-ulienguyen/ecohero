import {StyleSheet} from 'react-native';
import theme from '../styles/ThemeStyles';
 
var styles = StyleSheet.create({

   container: {
      flex: 1,
      top: 220,
      justifyContent: "center",
      alignItems: "center"
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
      top: 400,
      flexDirection: 'row',
      borderBottomWidth: 1,
      width: 309,
      borderBottomColor: theme.lightGray,
      left: 50
   },

   inputIcon: {
      marginRight: 20,
      marginLeft: 15,
      bottom: -12
   },

   greenBtn: {
      width: 309,
      height: 43,
      borderRadius: 30,
      backgroundColor: theme.darkGreen,
      top: 240,
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
      top: 250
   }




    
});

export default styles;