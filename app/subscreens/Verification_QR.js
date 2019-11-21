import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../styles/VerificationStyles'
import PatternBG from '../comps/PatternBG';
import GreenButton from '../comps/GreenButton'
import BackBar from '../comps/BackBar'

export default function QRCode() {
  return (

    <View>
      {/* Background Pattern */}
        <BackBar />

        <View style={styles.containerQR}>

          {/* Headings */}
          <Text style={styles.headingQR}>Verification Code</Text>
          <Text style={styles.bodyQR}>Please scan the code given to you for completing mission </Text>
          <Image style={styles.codeScan}
            source={require('../assets/imgs/qrcode-scanbox.png')}
          />
        </View>
        
        {/* Verify Button */}
        <View style={styles.verifyBut}>

          {/* 4 Digit Code Redirect */}
        <TouchableOpacity>
            <Text style={styles.redirect}>Can't Scan?</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
