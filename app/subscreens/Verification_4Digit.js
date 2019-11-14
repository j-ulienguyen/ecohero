import React, { useCallback } from 'react';
import CodeInput from 'react-native-confirmation-code-field';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../styles/VerificationStyles';
import PatternBG from '../comps/PatternBG'
import GreenButton from '../comps/GreenButton'
import BackBar from '../comps/BackBar'
import theme from '../styles/ThemeStyles'


// Navigation
import * as navigateTo from '../../RouteConstants';


// export const App = () => {

//   <View>

//    const handlerOnFulfill = useCallback(code => console.log(code), []);

//   return <CodeInput
//             onFulfill={handlerOnFulfill}
//             codeLength={4}
//             blurOnSubmit={true}
//             maskSymbol=''
//             />;
//             </View>
// };

export default function Code() {
  const handlerOnFulfill = useCallback(code => console.log(code), []);
  return (

    <View>
      {/* Background Pattern */}
      <PatternBG />
      <BackBar />

      <View style={styles.container}>

      {/* Headings */}
        <Text style={styles.heading}>Verification Code</Text>
        <Text style={styles.body}>Please enter the code given to you for completing mission</Text>
        <Text style={styles.enterCode}>Enter Code</Text>

        {/* Code Input container */}
        <View style={styles.codeInputContainer}>
        <CodeInput
          onFulfill={handlerOnFulfill}
          codeLength={4}
          blurOnSubmit={true}
          variant='border-circle'
          size={60}
          cellBorderWidth={4}
          activeColor={theme.darkGreen}
          inactiveColor={theme.darkGreen}
          inputPosition='full-width'
        />
        </View >

        {/* Verify Button */}
        <View style={styles.verifyBut}>

          <GreenButton title='Verify' width={309} height={43} onPress={navigateTo.RewardModal}/>

          {/* QR Code Redirect */}
          <TouchableOpacity onPress={navigateTo.VerifyQR}>
            <Text style={styles.redirect}>Scan QR Code</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
