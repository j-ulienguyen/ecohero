import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      top: 170
   },

   headTxt: {
      top: 0,
      fontSize: 24,
      fontFamily: theme.PoppinsBold
   },

   subTxt: {
      top: 10,
      fontSize: 16,
      fontFamily: theme.PoppinsRegular,
      textAlign: "center",
   },

   midCont: {
      justifyContent: "center",
      alignItems: "center",
   },

   chosenAvatar: {
      position: "relative",
      top: 220,
      borderRadius: 80,
      width: 130,
      height: 130,
      backgroundColor: theme.lightGray
   },

   imgHolder: {
      position: "absolute",
      top: 0,
      borderRadius: 80,
      width: 130,
      height: 130,
   },
   
   avatarCont: {
      flexDirection: "row",
      flexWrap: "wrap",
      top: 240,
      width: "70%",
      justifyContent: "center",
      alignItems: "center"
   },
   
   smIcon: {
      width: 70,
      height: 70,
      margin: 10,
      justifyContent: "center",
      alignItems: "center"
   },

   activeRing: {
      width: 70,
      height: 70,
      borderRadius: 40,
      borderColor: theme.lightGreen,
      borderWidth: 3
   },

   btmText: {
      textAlign:'center',
      top: 240
   }
});

export default styles;