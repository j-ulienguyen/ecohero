import {StyleSheet} from 'react-native';
import theme from './ThemeStyles';

var styles = StyleSheet.create({
    
    container: {
        alignItems: "center",
        flex:1,
        elevation: 100000,
    },

    codeContainer: {
        flex:1,
        flexDirection:'row',
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
    codeInput : {
        position:'absolute',
        flex:1,
        flexDirection:'row',
        height:50,
        width:50,
        backgroundColor:'grey',
        borderWidth:1,
        borderRadius:4,
        bottom:1003,
    },
    codeScan : {
        position:'absolute',
        top: 230,

    }



    
    });
export default styles;