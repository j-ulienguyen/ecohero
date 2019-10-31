import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/BackBarStyles';
 
export default function BackBar(){
  
   return (
      <View style={styles.container}>
         {/* Back Text and Arrow */}
         <TouchableOpacity>

            <Image
               style={styles.arrow}
               source={require('../assets/imgs/back-arrow.png')}
            />
            <Text style={styles.backTxt}>Back</Text>

         </TouchableOpacity>

         
      </View>
   );
 
};
