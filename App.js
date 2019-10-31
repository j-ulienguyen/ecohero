import React from 'react';
import {View, Text} from 'react-native';
import styles from './app/styles/AppStyles';
import SigninScreen from './app/screens/SigninScreen';
 
export default function App(){
   // UI
   return (
      <View style={styles.container}>
         {/* <Text>EcoHero App</Text> */}
         <SigninScreen />
      </View>
   )
}
