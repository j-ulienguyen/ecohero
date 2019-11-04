import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/OnboardStepsStyles';

export default function OnboardSteps(){
   const [txt, setTxt] = useState("");

   return (
      <View>

         <View style={styles.container}>

         {/* Step 1 */}
         <View> 
            <Image
            style = {styles.stepImg}
            source = {require('../assets/imgs/mission-onboard.png')}
            />
         </View>
            <Text style={styles.headTxt}>Missions</Text>
            <Text style={styles.subTxt}>Missions are updated monthly and each mission will reflect a certain number of stars and XP. </Text>
     
         
         {/* Step 2 */}
         {/* <View> 
            <Image
            style = {styles.stepImg}
            source = {require('../assets/imgs/proof-onboard.png')}
            />
         </View>
            <Text style={styles.headTxt}>Proof of Mission</Text>
            <Text style={styles.subTxt}>To verify that you completed your mission, you must either enter or scan a special code given to you. </Text> */}

         {/* Step 3 */}
         {/* <View> 
            <Image
            style = {styles.stepImg}
            source = {require('../assets/imgs/rewards-onboard.png')}
            />
         </View>
            <Text style={styles.headTxt}>s</Text>
            <Text style={styles.subTxt}>Keep on completing missions to receive rewards and badges. The more stars you collect the better the prize! </Text> */}
         </View>
         
         {/* Bottom Page Nav */}
         <View style={styles.navContainer}>

            {/* Skip Button */}
            <TouchableOpacity>
               <Text style={styles.btmText}>Skip</Text>
            </TouchableOpacity>
            
            {/* Page Navigation */}
            <View style={styles.pageDots}>
               <View style={[styles.regDot, styles.activeDot]}></View>
               <View style={styles.regDot}></View>
               <View style={styles.regDot}></View>
            </View>

            {/* Next Button */}
            <TouchableOpacity
               style={styles.greenBtn}>
                  <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
            
         </View> 
      </View>
   );
};