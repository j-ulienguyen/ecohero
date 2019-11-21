import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../styles/TreeBgStyles';


export default function TreeBg(){
   // UI
   return (
      <View style={styles.container}>
         {/* Tree Background */}
         <Image
            style={styles.treebg}
            // resizeMode="contain"
            source={require('../assets/imgs/tree-bg.png')}
         />
      </View>
   );
};
