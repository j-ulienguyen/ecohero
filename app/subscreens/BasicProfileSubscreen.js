import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/BasicProfileSubscreenStyles';

export default function BasicProfile(){
   const [txt, setTxt] = useState("");

   return (
      <View>

         <View style={styles.container}>
         
         {/* EcoHero Profile Text */}
            <Text style={styles.headTxt}>EcoHero Profile</Text>
            <Text style={styles.subTxt}>Join our community</Text>
         </View>

         {/* Field Entry */}
         <View style={styles.entryCont}>
            {/* First Name */}
               <View style={styles.fieldInput}>
                 
                  <TextInput 
                     placeholder = "First Name"
                     onChangeText = {(text)=>{ 
                        setTxt(text);
                     }}
                  />
               </View>
            {/* Last Name */}
               <View style={styles.fieldInput}>
                 
                  <TextInput 
                     placeholder = "Last Name"
                     onChangeText = {(text)=>{
                        setTxt(text);
                     }}
                  />
               </View>
            {/* Email Address */}
               <View style={styles.fieldInput}>
                 
                  <TextInput 
                     placeholder = "Email Address"
                     onChangeText = {(text)=>{
                        setTxt(text);
                     }}
                  />
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