import React from 'react';
import {View, Text} from 'react-native';

// Import comps & styles below
import styles from '../../styles/StartPageStyles';
import GreenButton from '../../comps/GreenButton';

// Navigation
import * as navigateTo from '../../../RouteConstants';


export default function SignUpEntry({CreateAccount, disabled2}){
   // UI
   return (
      <View style={styles.container}>
         {/* Create Account Button */}
         <GreenButton
            title="Create Account"
            width={309}
            height={43}
            marginTop={25}
            // disabled={false}
            onPress={async()=>{
               (disabled2)?
               (await CreateAccount(),
               navigateTo.BasicProfile()):
               alert('Please fill out all required fields.');
            }}/>
      </View>
   );
};
