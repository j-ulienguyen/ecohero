import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({

    // 4 Digit Code Styles

  container: {
    alignItems: 'center',
    top: 150,
  },
  codeInputContainer: {
    height: 75,
    width: '80%',
    // backgroundColor: 'red',
    marginBottom: 100,
  },
  heading: {
    justifyContent: 'center',
    fontFamily: theme.PoppinsBold,
    fontSize: 24,
  },
  body: {
    fontFamily: theme.PoppinsRegular,
    fontSize: 16,
    textAlign: 'center',
    width: '70%',
    marginTop: 10,
    marginBottom: 50,
  },
  enterCode: {
    justifyContent: 'center',
    fontFamily: theme.PoppinsBold,
    fontSize: 18,
  },

    // QR Code Styles
  containerQR: {
    alignItems:'center',
    marginTop:100,
  },
  headingQR: {
    justifyContent: 'center',
    fontFamily: theme.PoppinsBold,
    fontSize: 24,
  },
  bodyQR: {
    fontFamily: theme.PoppinsRegular,
    fontSize: 16,
    textAlign: 'center',
    width: '70%',
  },
  codeScan: {
      marginTop:20,
  },

    //   Shared Styles

  verifyBut: {
    marginTop:50,
    alignItems:'center',
  },
  redirect: {
    fontFamily: theme.RobotoRegular,
    fontSize: 14,
    color: theme.appBlack,
    textTransform: 'uppercase',
    marginTop: 15,
  },
});
export default styles;
