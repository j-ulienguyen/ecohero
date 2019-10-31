import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/SignInEntryStyles';
 
export default function SignInEntry(){
  
   return (
      <View style={styles.container}>
 
         {/* Sign In/ Sign Up Option */}
         <View style={styles.twoFields}>
            <Text style={styles.signInText}>SIGN IN</Text>
            <Text>SIGN UP</Text>
         </View>
 
         {/* Username Field Entry */}
         <View style={styles.userInput}>
            <Image
               style={styles.inputIcon}
               source={require('../assets/imgs/user-icon.png')}
            />
            <Text>Username</Text>
         </View>
 
         {/* Password Field Entry */}
         <View style={styles.passInput}>
            <Image
               style={styles.inputIcon}
               source={require('../assets/imgs/lock-icon.png')}
            />
            <Text>Password</Text>
         </View>
         
         {/* Continue Button */}
         <View>
         <TouchableOpacity
            style={styles.greenBtn}>
            
 
               <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
 
            <Text style={styles.btmText}>Forgot Password?</Text>
 
         </View>
      </View>
   );
 
};
