import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/OnboardStepsStyles';

export default function OnboardSteps(){
   const [txt, setTxt] = useState("");

   return (
      <View>

         <View style={styles.container}>

         <View> 
         {/* Step 1 */}
            <Image
            style = {styles.bgCard}
            source = {require('../assets/imgs/mission-onboard.png')}
            />
         </View>
         
         {/* Step 1 Description */}
            <Text style={styles.headTxt}>Missions</Text>
            <Text style={styles.subTxt}>Missions are updated monthly and each mission will reflect a certain number of stars and XP. </Text>
         </View>


         {/* Bottom Page Nav */}
         <View style={styles.navContainer}>
            {/* Next Button */}
            <TouchableOpacity
               style={styles.greenBtn}>
                  <Text style={styles.btnText}>Next</Text>
               </TouchableOpacity>

            {/* Skip Button */}
            <TouchableOpacity>
               <Text style={styles.btmText}>Skip</Text>
            </TouchableOpacity>
         </View> 

      </View>
   );
};