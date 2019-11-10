import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, ImageBackground} from 'react-native';
import styles from '../styles/VerificationStyles'
import PatternBG from '../comps/PatternBG';
import GreenButton from '../comps/GreenButton'

export default function QRCode() {
  return (
    <View>
      {/* Background Pattern */}
      <View>


        <GreenButton style={styles.verifyBut} />

        <View style={styles.container}>
          <Text style={styles.headingQR}>Verification Code</Text>
          <Text style={styles.bodyQR}>
            Please scan the code given to you for completing mission
          </Text>
          <Image
            style={styles.codeScan}
            source={require('../assets/imgs/qrcode-scanbox.png')}
          />
        </View>
      </View>
    </View>
  );
}
