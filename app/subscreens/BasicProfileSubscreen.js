import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

// Import comps & styles below
import styles from '../styles/BasicProfileSubscreenStyles';
import GreenButton from '../comps/GreenButton';
import TreeBg from '../comps/TreeBg';
import BackBar from '../comps/BackBar';
import StepProgressBar from '../comps/signup/StepProgressBar';
import theme from '../styles/ThemeStyles';

// Navigation
import * as navigateTo from '../../RouteConstants';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';


var first_name = "";
var last_name = "";
var email = "";
var classroom_code = "";

// Step Bar
var progressWidth = 120;
var checkpoint1 = theme.lightGreen;
var checkpoint2 = theme.lightGray;
var checkpoint3 = theme.lightGray;


export default function BasicProfile(){

   // const [txt, setTxt] = useState("");
   const [disabled, setDisabled] = useState("");

	/*
	 *****************************************************************
	 *****************************************************************
	*/

   // Update Profile
   const UpdateProfile = async()=>{
      // As the id in users table is an integer, must convert the stored user_id from string to int
      var user_id = await AsyncStorage.getItem("user_id");
      user_id = parseInt(user_id);

      try {
         var userProfile = await ax("users_update", {id:user_id, first_name:first_name, last_name:last_name, email:email, classroom_code:classroom_code});
         console.log("UpdateProfile: ", userProfile);
      } catch (error){
         console.log("Error UpdateProfile");
      }
         console.log("End of UpdateProfile");
   }

	/*
	 *****************************************************************
	 *****************************************************************
   */

   return (
      <KeyboardAvoidingView
         behavior="position"
         // enabled
         style={styles.whiteBg}
      >
         <BackBar/>
         <StepProgressBar
            progressWidth={progressWidth}
            checkpoint1={checkpoint1}
            checkpoint2={checkpoint2}
            checkpoint3={checkpoint3}
         />

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
                        if(first_name == '' || last_name == '' || email == '' || classroom_code == ''){
                           setDisabled(false);
                        } else {
                           setDisabled(true);
                        }
                     }}
                     />
               </View>
               {/* Last Name */}
               <View style={styles.fieldInput}>
                  <TextInput
                     placeholder = "Last Name"
                     onChangeText = {(text)=>{
                        last_name = text;
                        if(first_name == '' || last_name == '' || email == '' || classroom_code == ''){
                           setDisabled(false);
                        } else {
                           setDisabled(true);
                        }
                     }}
                     />
               </View>
               {/* Email Address */}
               <View style={styles.fieldInput}>
                  <TextInput
                     placeholder = "Email Address"
                     onChangeText = {(text)=>{
                        email = text;
                        if(first_name == '' || last_name == '' || email == '' || classroom_code == ''){
                           setDisabled(false);
                        } else {
                           setDisabled(true);
                        }
                     }}
                     />
               </View>
               {/* Classroom Code */}
               <View style={styles.fieldInput}>
                  <TextInput
                     placeholder = "Classroom Code"
                     onChangeText = {(text)=>{
                        classroom_code = text;
                        if(first_name == '' || last_name == '' || email == '' || classroom_code == ''){
                           setDisabled(false);
                        } else {
                           setDisabled(true);
                        }
                     }}
                     />
               </View>
            </View>
         </View>

         {/* Continue Button */}
         <View style={{alignItems: "center", width: "100%", marginTop: 430, marginBottom:100}}>
            <GreenButton
               title="Continue"
               width={309} height={43}
               onPress= {async()=>{
                  (disabled)?
                  (await UpdateProfile(),
                  navigateTo.ChooseAvatar()):
                  alert('Please fill out all required fields.');
               }}
            />
         </View>
      </KeyboardAvoidingView>
   );
};