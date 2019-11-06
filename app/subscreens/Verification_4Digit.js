import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import styles from '../styles/VerificationStyles';
import PatternBG from '../comps/PatternBG'

export default function Code() {
  return (
      
    <View>
        {/* Background Pattern */}
        <PatternBG />

      <View style={styles.container}>


      <Text style={styles.heading}>Verification Code</Text>
      <Text style={styles.body}>
        Please enter the code given to you for completing mission
      </Text>
      <Text style={styles.enterCode}>Enter Code</Text>
      <View styles={styles.codeContainer}>    
        <View styles={styles.codeInput}></View>
        <View styles={styles.codeInput}></View>
        <View styles={styles.codeInput}></View>
        <View styles={styles.codeInput}></View>
      </View>
    </View>
    </View>
  );
}
