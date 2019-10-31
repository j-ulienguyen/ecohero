import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/EcoHeroLogoStyles';
 
export default function EcoHeroLogo(){
  
   return (
      <View style={styles.container}>
         {/* EcoHero Logo */}
         <Image
            style={styles.logo}
            source={require('../assets/imgs/ecohero-logo.png')}
         />
         
      </View>
   );
 
};
