import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    
    container: {
        alignItems: "center",
        flex:1,
        elevation: 100000,
    },

    codeInputContainer: {
        height:100,
        width:100,
        backgroundColor:"black",
        flex:1,
    },
    heading : {
        justifyContent: 'center',
        fontFamily: theme.PoppinsBold,
        fontSize: 24,
        top: 175,
    
    },
    headingQR : {
        justifyContent: 'center',
        fontFamily: theme.PoppinsBold,
        fontSize: 24,
        top: 100,
    
    },
    body : {
        fontFamily: theme.PoppinsRegular,
        fontSize: 16,
        top: 200,
        textAlign:'center',
        width:'70%',
    },
    bodyQR : {
        fontFamily: theme.PoppinsRegular,
        fontSize: 16,
        top: 115,
        textAlign:'center',
        width:'70%',
    },
    enterCode : {
        justifyContent: 'center',
        fontFamily: theme.PoppinsBold,
        fontSize: 18,
        top: 275,
    
    },
    codeScan : {
        position:'absolute',
        top: 230,
    },
    codeInput : {
        position:'absolute',
        bottom:10,
    },
    verifyBut : {
        position:'absolute',
        bottom:0,
        height:200,
        width:'50%',
        // height:100,
        // width:200,
    }



    
    });
export default styles;