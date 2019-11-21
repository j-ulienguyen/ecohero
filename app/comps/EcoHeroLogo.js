import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../styles/EcoHeroLogoStyles';


export default function EcoHeroLogo(){
   // UI
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
