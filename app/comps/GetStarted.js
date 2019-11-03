import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/GetStartedStyles';

export default function GetStarted(){
   const [txt, setTxt] = useState("");

   return (
      <View>

         <View style={styles.container}>
         
         {/* Welcome Page */}
            <Text style={styles.headTxt}>Welcome to EcoHero</Text>
            <Text style={styles.subTxt}>Yippee! By signing up you are one step closer to becoming an EcoHero. The more missions you complete the more rewards you win!</Text>
         </View>

         <View style={styles.container}>
         {/* Start Button */}
         <TouchableOpacity
            style={styles.greenBtn}>
               <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>

             {/* Skip Button */}
             <TouchableOpacity>
               <Text style={styles.btmText}>Skip</Text>
            </TouchableOpacity>
         </View> 

      </View>
   );
};