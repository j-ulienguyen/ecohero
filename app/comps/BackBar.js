import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/BackBarStyles';

// Navigation
import * as navigateTo from '../../RouteConstants';


export default function BackBar(){
   // UI
   return (
      <View style={styles.container}>
         {/* Back Text and Arrow */}
         <TouchableOpacity onPress={navigateTo.Back} activeOpacity={0.9}>
            <View style={{width: 100, height: 50}}>
               <Image
                  style={styles.arrow}
                  source={require('../assets/imgs/back-arrow.png')}
               />
               <Text style={styles.backTxt}>Back</Text>
            </View>
         </TouchableOpacity>
      </View>
   );
};
