import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/ChooseAvatarSubscreenStyles';
import GreenButton from '../comps/GreenButton';
import BackBar from '../comps/BackBar';
import StepProgressBar from '../comps/signup/StepProgressBar';

// Navigation
import * as navigateTo from '../../RouteConstants';


export default function ChooseAvatar({icon1, icon2, icon3, icon4, icon5, icon6}){

   // Initial Avatar Icon Selections 
   const [selectIcon1, setSelectIcon1] = useState(false);
   const [selectIcon2, setSelectIcon2] = useState(false);
   const [selectIcon3, setSelectIcon3] = useState(false);
   const [selectIcon4, setSelectIcon4] = useState(false);
   const [selectIcon5, setSelectIcon5] = useState(false);
   const [selectIcon6, setSelectIcon6] = useState(false);

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
   }

   if(selectIcon2 === true){
      activeRing2 = styles.activeRing;
      chosenAvatarIcon = avatarIcon2;
   }

   if(selectIcon3 === true){
      activeRing3 = styles.activeRing;
      chosenAvatarIcon = avatarIcon3;
   }

   if(selectIcon4 === true){
      activeRing4 = styles.activeRing;
      chosenAvatarIcon = avatarIcon4;
   }

   if(selectIcon5 === true){
      activeRing5 = styles.activeRing;
      chosenAvatarIcon = avatarIcon5;
   }

   if(selectIcon6 === true){
      activeRing6 = styles.activeRing;
      chosenAvatarIcon = avatarIcon6;
   }

   function AllFalse(){
      setSelectIcon1(false);
      setSelectIcon2(false);
      setSelectIcon3(false);
      setSelectIcon4(false);
      setSelectIcon5(false);
      setSelectIcon6(false);
   }

   return (

      <View style={styles.whiteBg}>
         <BackBar />
         <StepProgressBar />

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
                        style={[styles.smIcon, activeRing1]}
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
                        style={[styles.smIcon, activeRing2]}
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
                        style={[styles.smIcon, activeRing3]}
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
                        style={[styles.smIcon, activeRing4]}
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
                        style={[styles.smIcon, activeRing5]}
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
                        style={[styles.smIcon, activeRing6]}
                        source = {avatarIcon6}   
                     />
                  </TouchableOpacity>

                
               </View>
            </View>
         </View>

         {/* Continue Button */}
         <View style={{alignItems: "center", width: "100%", marginTop: 160, marginBottom: 50}}>
            <GreenButton width={309} height={43} title="Continue" onPress={navigateTo.GetStarted}/>
         </View>
      </View>
   );
};