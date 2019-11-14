import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/SignUpEntryStyles';
import GreenButton from '../../comps/GreenButton';


export default function SignUpEntry(){
   const [txt, setTxt] = useState("");

   // UI
   return (
      <View style={styles.container}>
         {/* Sign In / Sign Up Buttons */}
         <View style={styles.twoFields}>
            {/* Sign In Option */}
            <TouchableOpacity>
               <Text style={styles.signInText}>SIGN IN</Text>
               {/* <View style={styles.lineLeft}></View> */}
            </TouchableOpacity>

            {/* Sign Up Option */}
            <TouchableOpacity>
               <Text style={[styles.signUpText, styles.activeTxt]}>SIGN UP</Text>
               <View style={styles.rightLeft}></View>
            </TouchableOpacity>
         </View>

         {/* Username Field Entry */}
         <View style={styles.userInput}>
            <Image
               style={styles.inputIcon}
               source={require('../../assets/imgs/user-icon.png')}
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
               source={require('../../assets/imgs/lock-icon.png')}
            />
            <TextInput
               secureTextEntry={true}
               placeholder = "Password"
               onChangeText = {(text)=>{
                  setTxt(text);
               }}
            />
         </View>

         {/* Create Account Button */}
         <GreenButton width={309} height={43} title="Create Account" marginTop={70}/>
      </View>
   );

};
