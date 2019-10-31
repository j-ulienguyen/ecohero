import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/SignInEntryStyles';

/* import subscreen comps below */
import ForgotPW from '../subscreens/ForgotPWSubscreen';
 
export default function SignInEntry(){
   const [txt, setTxt] = useState("");

   return (
      <View style={styles.container}>
 
         {/* Sign In Option */}
         <View style={styles.twoFields}>
         <TouchableOpacity>
               <Text style={styles.signInText}>SIGN IN</Text>
         </TouchableOpacity>

         {/* Sign Up Option */}
         <TouchableOpacity>
               <Text>SIGN UP</Text>
         </TouchableOpacity>
         </View>
 
         {/* Username Field Entry */}
         <View style={styles.userInput}>
            <Image
               style={styles.inputIcon}
               source={require('../assets/imgs/user-icon.png')}
            />
            <TextInput
               placeholder = "Username"
               onChangeText = {(text)=>{
                  setTxt(text);
               }}
            />
         </View>
 
         {/* Password Field Entry */}
         <View style={styles.passInput}>
            <Image
               style={styles.inputIcon}
               source={require('../assets/imgs/lock-icon.png')}
            />
            <TextInput 
               secureTextEntry={true} 
               placeholder = "Password"
               onChangeText = {(text)=>{
                  setTxt(text);
               }}
            />
         </View>
         
         {/* Continue Button */}
         <View>
         <TouchableOpacity
            style={styles.greenBtn}>
            
 
               <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>

               
         {/* Forgot Pw Button */}
         <TouchableOpacity>
             <Text style={styles.btmText}>Forgot Password?</Text>

         </TouchableOpacity>
         </View> 
      </View>
   );
 
};
