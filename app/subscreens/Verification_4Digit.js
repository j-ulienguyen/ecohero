import React, { useCallback } from 'react';
import CodeInput from 'react-native-confirmation-code-field';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import styles from '../styles/VerificationStyles';
import PatternBG from '../comps/PatternBG'
import GreenButton from '../comps/GreenButton'


// 


// export const App = () => {
//   const handlerOnFulfill = useCallback(code => console.log(code), []);
  
 
//   return <CodeInput 
//             onFulfill={handlerOnFulfill}
//             codeLength={4}
//             blurOnSubmit={true}
//             maskSymbol=''

//   />;
// };

export default function Code() {
  const handlerOnFulfill = useCallback(code => console.log(code), []);
  return (
      
    <View>

      {/* Background Pattern */}
      <PatternBG />
      <GreenButton style={styles.verifyBut} />


      <View style={styles.container}>


      <Text style={styles.heading}>Verification Code</Text>

      <Text style={styles.body}>
        Please enter the code given to you for completing mission
      </Text>

      <Text style={styles.enterCode}>Enter Code</Text>

      {/* Code Input container */}
      <View style={styles.codeInputContainer}> 
      <CodeInput style={styles.codeInput}
        onFulfill={handlerOnFulfill}
        codeLength={4}
        blurOnSubmit={true}
        maskSymbol='9'
      />

      
      </View >


    </View>
    </View>
  );
}
