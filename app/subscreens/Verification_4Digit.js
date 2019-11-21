import React, { useCallback } from 'react';
import CodeInput from 'react-native-confirmation-code-field';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/VerificationStyles';
import PatternBG from '../comps/PatternBG'
import GreenButton from '../comps/GreenButton'
import BackBar from '../comps/BackBar'
import theme from '../styles/ThemeStyles'

// Navigation
import * as navigateTo from '../../RouteConstants';


//   const handlerOnFulfill = useCallback(code => console.log(code), []);
//   return <CodeInput
//             onFulfill={handlerOnFulfill}
//             codeLength={4}
//             blurOnSubmit={true}
//             maskSymbol=''
//             />;
//             </View>
// };


export default function Code({xpAmount, starAmount, UpdateMission, disabled}) {

  console.log("Star Amount + XP: ", starAmount, xpAmount);

  const handlerOnFulfill = useCallback(code => console.log(code), []);

  // Mission Success Image
  const missionSuccess = require('../assets/imgs/mission-success.png');

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
          <GreenButton
            title='Verify'
            width={309} height={43}
            onPress={()=>{
              // Update mission status to 3 = Completed
              UpdateMission();
              navigateTo.RewardModal({
                // Pass over following values
                xpAmount,
                starAmount,
                heading: "Mission Success!",
                description: "Your mission was successfully verified. Collect more stars as you complete missions",
                imagePath: missionSuccess,
            });
          }}/>

          {/* QR Code Redirect */}
          <TouchableOpacity onPress={navigateTo.VerifyQR}>
            <Text style={styles.redirect}>Scan QR Code</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
