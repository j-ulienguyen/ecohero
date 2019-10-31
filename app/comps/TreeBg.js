import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/TreeBgStyles';
 
export default function TreeBg(){
  
   return (
      <View style={styles.container}>
         {/* Tree Background */}
         <Image
            style={styles.treebg}
            source={require('../assets/imgs/tree-bg.png')}
         />
         
      </View>
   );
 
};
