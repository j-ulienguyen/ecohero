import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/ForgotPWSubscreenStyles';
import GreenButton from '../comps/GreenButton';

// Navigation
import * as navigateTo from '../../RouteConstants';


export default function ForgotPW(){
   const [txt, setTxt] = useState("");

   return (
      <View>
         {/* Forgot PW Image */}
         <View style={styles.container}>
            <Image
               source={require('../assets/imgs/forgot-password.png')}
            />

         {/* Forgot PW Text Script */}
            <Text style={styles.headTxt}>Forgot Password?</Text>
            <Text style={styles.subTxt}>We just need your registered email address to send you a password reset</Text>
         </View>

         {/* Email Address Field Entry */}
         <View style={styles.emailInput}>
            <Image
               style={styles.inputIcon}
               source={require('../assets/imgs/email-icon.png')}
            />
            <TextInput
               placeholder = "Email Address"
               onChangeText = {(text)=>{
                  setTxt(text);
               }}
            />
         </View>

         <View style={{alignItems: "center", width: "100%", marginTop: 430}}>
            {/* Send Email Button */}
            <GreenButton width={309} height={43} title="Send Email" onPress={navigateTo.Home}/>

            {/* Don't have an account */}
            <TouchableOpacity onPress={navigateTo.Signin}>
               <Text style={styles.btmText}>Don't have an account?</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};