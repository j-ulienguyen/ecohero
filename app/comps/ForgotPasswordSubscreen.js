import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/ForgotPWSubscreenStyles';
import TreeBg from '../comps/TreeBg';
import BackBar from '../comps/BackBar';

export default function ForgotPW(){
   const [txt, setTxt] = useState("");

   return (
      <View>
         <BackBar />

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

         {/* Send Email Button */}
         <View style={styles.container}>
         <TouchableOpacity
            style={styles.greenBtn}>
               <Text style={styles.btnText}>Send Email</Text>
            </TouchableOpacity>

         {/* Don't have an account */}
         <TouchableOpacity>
             <Text style={styles.btmText}>Don't have an account?</Text>
         </TouchableOpacity>
         </View> 

         <TreeBg />
      </View>
   );
}; 