import React from 'react';
import {View, Text} from 'react-native';
import styles from './app/styles/AppStyles';

// Import comps & styles below
import SigninScreen from './app/screens/SigninScreen';


export default function App(){
   // UI
   return (
      <View style={styles.container}>
         <SigninScreen/>
      </View>
   )
}
