import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/ChooseAvatarSubscreenStyles';

export default function ChooseAvatar(){
   const [txt, setTxt] = useState("");

   return (
      <View>

         <View style={styles.container}>
         
         {/* EcoHero Profile Text */}
            <Text style={styles.headTxt}>Select Your Avatar</Text>
            <Text style={styles.subTxt}>Go Wild</Text>
         </View>

         {/* Avatar Container */}
         <View>
            {/* Chosen Avatar Section */}
            <View>

            </View>
            
            {/* Avatar 6 Selection */}
            <View style={styles.midCont}>
               <View style={styles.chosenAvatar}>
                  <Image
                     style={styles.imgHolder}
                     source= {require('../assets/imgs/jug-avatar.png')}
                  />
               </View>

               <View style={styles.avatarCont}>
            
                  <Image
                        style = {[styles.smIcon, styles.activeRing]}
                        source = {require('../assets/imgs/jug-avatar.png')}
                     />

                  <Image
                        style = {styles.smIcon}
                        source = {require('../assets/imgs/tote-avatar.png')}
                     />

                  <Image
                        style = {styles.smIcon}
                        source = {require('../assets/imgs/bottle-avatar.png')}
                     />
         
                  <Image
                        style = {styles.smIcon}
                        source = {require('../assets/imgs/can-avatar.png')}
                     />

                  <Image
                        style = {styles.smIcon}
                        source = {require('../assets/imgs/paper-avatar.png')}
                     />

                  <Image
                        style = {styles.smIcon}
                        source = {require('../assets/imgs/lunchbox-avatar.png')}
                     />
               </View>
            </View>
         </View>

         {/* Continue Button */}
         <View style={styles.container}>
         <TouchableOpacity
            style={styles.greenBtn}>
               <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
         </View> 

      </View>
   );
};