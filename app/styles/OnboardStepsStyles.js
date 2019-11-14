import {StyleSheet} from 'react-native';
import theme from '../styles/ThemeStyles';

var styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 200
   },

   headTxt: {
      // marginTop: 230,
      fontSize: 24,
      fontFamily: theme.PoppinsBold
   },

   subTxt: {
      // marginTop: 20,
      width: "70%",
      fontSize: 16,
      fontFamily: theme.PoppinsRegular,
      textAlign: "center",
   },

   stepImg: {
      justifyContent: "center",
      alignItems: "center"
   },

   navContainer: {
      // bottom: -580,
      width: "90%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-evenly"
      // backgroundColor: "pink",
   },
   
   pageDots: {
      flexDirection: "row",
      left: 50
   }, 
   
   regDot: {
      width: 10,
      height: 10,
      borderRadius: 10,
      margin: 10,
      backgroundColor: theme.lightGray,
   },

   activeDot: {
      width: 10,
      height: 10,
      borderRadius: 10,
      margin: 10,
      backgroundColor: theme.darkGreen,
      position: "relative",
      top: 0
   },

   greenBtn: {
      width: 100,
      height: 43,
      borderRadius: 30,
      backgroundColor: theme.darkGreen,
      justifyContent: "center",
      alignItems: "center",
      left: 60
   },
   
   btnText: {
      fontFamily: theme.PoppinsBold,
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: 2,
      color: theme.white,
   },

   btmText: {
      textAlign:'center',
      textTransform: "uppercase",
      fontFamily: theme.PoppinsBold,
      color: theme.medGray,
      fontSize: 14,
      letterSpacing: 2,
   },

});

export default styles;