import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/BasicProfileSubscreenStyles';
import GreenButton from '../comps/GreenButton';
import TreeBg from '../comps/TreeBg';
import BackBar from '../comps/BackBar';
import StepProgressBar from '../comps/signup/StepProgressBar';

// Navigation
import * as navigateTo from '../../RouteConstants';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';

var first_name = "";
var last_name = "";
var email = "";
var classroom_code = "";


export default function BasicProfile({StoreUserID}){

   const [txt, setTxt] = useState("");

   // Read Profile
   const ReadProfile = async()=>{
      var user_id = await AsyncStorage.getItem("user_id");

      var userProfile = await ax("users_read", {id:user_id});
      console.log("ReadProfile: ", userProfile);
   }

   // Create Profile
   const CreateProfile = async()=>{
      var user_id = await AsyncStorage.getItem("user_id");

      try {
         var userProfile = await ax("users_update", {id:user_id});
         console.log("CreateProfile: ", userProfile[0].id);

         StoreUserID(userProfile[0].id)
     } catch (error){
         console.log("Error CreateProfile");
     }
     console.log("End of CreateProfile");
   }

   useEffect(()=>{
      ReadProfile();
   }, [])


   return (
      <View style={styles.whiteBg}>
         <BackBar/>
         <StepProgressBar/>

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
                        first_name = text;
                        {/* setTxt(text); */}
                     }}
                     />
               </View>
               {/* Last Name */}
               <View style={styles.fieldInput}>
                  <TextInput
                     placeholder = "Last Name"
                     onChangeText = {(text)=>{
                        last_name = text;
                        {/* setTxt(text); */}
                     }}
                     />
               </View>
               {/* Email Address */}
               <View style={styles.fieldInput}>
                  <TextInput
                     placeholder = "Email Address"
                     onChangeText = {(text)=>{
                        email = text;
                        {/* setTxt(text); */}
                     }}
                     />
               </View>
               {/* Classroom Code */}
               <View style={styles.fieldInput}>
                  <TextInput
                     placeholder = "Classroom Code"
                     onChangeText = {(text)=>{
                        classroom_code = text;
                        {/* setTxt(text); */}
                     }}
                     />
               </View>
            </View>
         </View>

         {/* Continue Button */}
         <View style={{alignItems: "center", width: "100%", marginTop: 200, marginBottom:200}}>
            <GreenButton
               title="Continue"
               width={309} height={43}
               onPress= {async()=>{
                  CreateProfile();
                  navigateTo.ChooseAvatar();
               }}
            />
         </View>
      </View>
   );
};