import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/BasicProfileSubscreenStyles';
import GreenButton from '../comps/GreenButton';
import TreeBg from '../comps/TreeBg';
import BackBar from '../comps/BackBar';
import StepProgressBar from '../comps/signup/StepProgressBar';

// Navigation
import * as navigateTo from '../../RouteConstants';


export default function BasicProfile(){
   const [txt, setTxt] = useState("");

   return (

      <View style={styles.whiteBg}>
         {/* <TreeBg /> */}
         <BackBar />
         <StepProgressBar />

         <View style={styles.container}>
            {/* EcoHero Profile Text */}
            <Text style={styles.headTxt}>EcoHero Profile</Text>
            <Text style={styles.subTxt}>Join our community</Text>
  

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
            {/* Classroom Code */}
            <View style={styles.fieldInput}>
               <TextInput
                  placeholder = "Classroom Code"
                  onChangeText = {(text)=>{
                     setTxt(text);
                  }}
                  />
            </View>
            </View>
         </View>
         {/* Continue Button */}
         <View style={{alignItems: "center", width: "100%", marginTop: 200, marginBottom:200}}>
            <GreenButton width={309} height={43} title="Continue" onPress={navigateTo.ChooseAvatar}/>
         </View>

         
      </View>
   );
};