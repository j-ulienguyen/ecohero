import {StyleSheet} from 'react-native';
import theme from '../styles/ThemeStyles';
import { Back } from '../../RouteConstants';

var styles = StyleSheet.create({
   container: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.white
   },
   
   headTxt: {
      marginTop: 30,
      fontSize: 24,
      fontFamily: theme.PoppinsBold,
      position:"relative"
   },

   subTxt: {
      width: "75%",
      fontSize: 16,
      fontFamily: theme.PoppinsRegular,
      textAlign: "center",
      position:"relative"
   },

   stepImg: {
      position:"relative",
      justifyContent: "center",
      alignItems: "center"
   },

   greenBtn: {
      borderRadius: 30,
      backgroundColor: theme.darkGreen,
      justifyContent: "center",
      alignItems: "center",
      width: 100,
      height: 43
  },

  btnText: {
      fontFamily: theme.PoppinsBold,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 2,
      color: theme.white
  },

  skipTxt: {
      fontFamily: theme.PoppinsBold,
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: 2,
      color: theme.medGray,
      left: 30,
      marginTop: 10
  },

  doneTxt: {
   fontFamily: theme.PoppinsBold,
   fontSize: 14,
   textTransform: "uppercase",
   letterSpacing: 2,
   color: theme.medGray,
   right: 30,
   marginTop: 10
},

  activeDot: {
     backgroundColor: theme.darkGreen
  }
});

export default styles;