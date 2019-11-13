import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/StartPageStyles';
import GreenButton from '../../comps/GreenButton';


export default function SignInEntry(){

   // UI
   return (
      <View style={styles.container}>

         {/* Continue Button */}
         <GreenButton width={309} height={43} title="Continue" marginTop={60}/>

         {/* Forgot Pw Text Button */}
         <TouchableOpacity>
            <Text style={styles.btmText}>Forgot Password?</Text>
         </TouchableOpacity>
      </View>
   );

};
