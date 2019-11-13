import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/StartPageStyles';
import GreenButton from '../../comps/GreenButton';


export default function SignUpEntry(){

   // UI
   return (
      <View style={styles.container}>
      

         {/* Create Account Button */}
         <GreenButton width={309} height={43} title="Create Account" marginTop={60}/>
      </View>
   );

};
