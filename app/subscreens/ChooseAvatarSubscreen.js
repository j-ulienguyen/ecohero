import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/ChooseAvatarSubscreenStyles';
import GreenButton from '../comps/GreenButton';
import BackBar from '../comps/BackBar';
import StepProgressBar from '../comps/signup/StepProgressBar';
import theme from '../styles/ThemeStyles';
// Navigation
import * as navigateTo from '../../RouteConstants';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';


export default function ChooseAvatar(){

   // Initial Avatar Icon Selections
   const [selectIcon1, setSelectIcon1] = useState(false);
   const [selectIcon2, setSelectIcon2] = useState(false);
   const [selectIcon3, setSelectIcon3] = useState(false);
   const [selectIcon4, setSelectIcon4] = useState(false);
   const [selectIcon5, setSelectIcon5] = useState(false);
   const [selectIcon6, setSelectIcon6] = useState(false);

   var chosenAvatarName;

   const avatarIcon = {
      'jug': require('../assets/imgs/jug-avatar.png'),
      'tote': require('../assets/imgs/tote-avatar.png'),
      'bottle': require('../assets/imgs/bottle-avatar.png'),
      'can': require('../assets/imgs/can-avatar.png'),
      'paper': require('../assets/imgs/paper-avatar.png'),
      'lunchbox': require('../assets/imgs/lunchbox-avatar.png')
   }

   // Init vars - Default icons are not active
   var activeRing1 = null;
       activeRing2 = null;
       activeRing3 = null;
       activeRing4 = null;
       activeRing5 = null;
       activeRing6 = null;
       chosenAvatarIcon = null;
       avatarIcon1 = avatarIcon['jug'];
       avatarIcon2 = avatarIcon['tote'];
       avatarIcon3 = avatarIcon['bottle'];
       avatarIcon4 = avatarIcon['can'];
       avatarIcon5 = avatarIcon['paper'];
       avatarIcon6 = avatarIcon['lunchbox'];

   if(selectIcon1 === true){
      activeRing1 = styles.activeRing;
      chosenAvatarIcon = avatarIcon1;
      chosenAvatarName = "jug";
   }

   if(selectIcon2 === true){
      activeRing2 = styles.activeRing;
      chosenAvatarIcon = avatarIcon2;
      chosenAvatarName = "tote";
   }

   if(selectIcon3 === true){
      activeRing3 = styles.activeRing;
      chosenAvatarIcon = avatarIcon3;
      chosenAvatarName = "bottle";
   }

   if(selectIcon4 === true){
      activeRing4 = styles.activeRing;
      chosenAvatarIcon = avatarIcon4;
      chosenAvatarName = "can";
   }

   if(selectIcon5 === true){
      activeRing5 = styles.activeRing;
      chosenAvatarIcon = avatarIcon5;
      chosenAvatarName = "paper";
   }

   if(selectIcon6 === true){
      activeRing6 = styles.activeRing;
      chosenAvatarIcon = avatarIcon6;
      chosenAvatarName = "lunchbox";
   }

   function AllFalse(){
      setSelectIcon1(false);
      setSelectIcon2(false);
      setSelectIcon3(false);
      setSelectIcon4(false);
      setSelectIcon5(false);
      setSelectIcon6(false);
   }

	/*
	 *****************************************************************
	 *****************************************************************
	*/

   // Update Avatar
   const UpdateAvatar = async()=>{
      // As the id in users table is an integer, must convert the stored user_id from string to int
      var user_id = await AsyncStorage.getItem("user_id");
      user_id = parseInt(user_id);

      try {
         var userAvatar = await ax("users_update", {id:user_id, avatar:chosenAvatarName});
         console.log("UpdateAvatar: ", userAvatar);

      } catch (error){
         console.log("Error UpdateAvatar", error.message);
      }
         console.log("End of UpdateAvatar");
   }

	/*
	 *****************************************************************
	 *****************************************************************
   */
   
   var progressWidth = 220;
   var checkpoint1 = theme.lightGreen;
   var checkpoint2 = theme.lightGreen;
   var checkpoint3 = theme.lightGray;
   var width3 = 3;
   var border3 = theme.lightGreen;
   // var inprogressCircle = 

   return (

      <View style={styles.whiteBg}>
         <BackBar />
         <StepProgressBar  
            // inprogressCircle={inprogressCircle}
            // activeCircle={activeCircle}
            progressWidth={progressWidth}
            checkpoint1={checkpoint1}
            checkpoint2={checkpoint2}
            checkpoint3={checkpoint3}
            width3={width3}
            border3={border3}
         />

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

            <View style={styles.midCont}>
               <View style={styles.chosenAvatar}>
                  <Image
                     style={styles.imgHolder}
                     source= {chosenAvatarIcon}
                     />
               </View>

               {/* Avatar 6 Selection */}
               <View style={styles.avatarCont}>

                  {/* Icon One */}
                  <TouchableOpacity
                     onPress={()=>{
                        AllFalse();
                        setSelectIcon1(true)
                     }}
                  >
                     <Image
                        style={[styles.smIcon, activeRing1, styles.ring]}
                        source = {avatarIcon1}
                     />
                  </TouchableOpacity>

                  {/* Icon Two */}
                  <TouchableOpacity
                     onPress={()=>{
                        AllFalse();
                        setSelectIcon2(true)
                     }}
                  >
                     <Image
                        style={[styles.smIcon, activeRing2, styles.ring]}
                        source = {avatarIcon2}
                     />
                  </TouchableOpacity>

                  {/* Icon Three */}
                  <TouchableOpacity
                     onPress={()=>{
                        AllFalse();
                        setSelectIcon3(true)
                     }}
                  >
                     <Image
                        style={[styles.smIcon, activeRing3, styles.ring]}
                        source = {avatarIcon3}
                     />
                  </TouchableOpacity>

                  {/* Icon Four */}
                  <TouchableOpacity
                     onPress={()=>{
                        AllFalse();
                        setSelectIcon4(true)
                     }}
                  >
                     <Image
                        style={[styles.smIcon, activeRing4, styles.ring]}
                        source = {avatarIcon4}
                     />
                  </TouchableOpacity>

                  {/* Icon Five */}
                  <TouchableOpacity
                     onPress={()=>{
                        AllFalse();
                        setSelectIcon5(true)
                     }}
                  >
                     <Image
                        style={[styles.smIcon, activeRing5, styles.ring]}
                        source = {avatarIcon5}
                     />
                  </TouchableOpacity>

                  {/* Icon Six */}
                  <TouchableOpacity
                     onPress={()=>{
                        AllFalse();
                        setSelectIcon6(true)
                     }}
                  >
                     <Image
                        style={[styles.smIcon, activeRing6, styles.ring]}
                        source = {avatarIcon6}
                     />
                  </TouchableOpacity>


               </View>
            </View>
         </View>

         {/* Continue Button */}
         <View style={{alignItems: "center", width: "100%", marginTop: 160, marginBottom: 50}}>
            <GreenButton
               width={309} height={43}
               title="Continue"
               onPress={async()=>{
                  await UpdateAvatar();
                  navigateTo.GetStarted()
               }}/>
         </View>
      </View>
   );
};