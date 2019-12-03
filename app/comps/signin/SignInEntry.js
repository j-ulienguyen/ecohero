import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/StartPageStyles';
import GreenButton from '../../comps/GreenButton';

// Navigation
import * as navigateTo from '../../../RouteConstants';


export default function SignInEntry({LoginAccount, username, password}){
   // UI
   return (
      <View style={styles.container}>
         {/* Continue Button */}
         <GreenButton
            title="Continue"
            width={309} height={43} marginTop={25}
            onPress={()=>{
               if(username == '' || password ==''){
                  alert('Please fill out all required fields.');
               } else {
                  LoginAccount();
               }
         }}/>

         {/* Forgot Pw Text Button */}
         <TouchableOpacity
				onPress={navigateTo.ForgotPW}>
				<Text style={styles.btmText}>Forgot Password?</Text>
			</TouchableOpacity>

      </View>
   );

};
