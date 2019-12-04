import React, { useState, useEffect } from 'react';
import CodeInput from 'react-native-confirmation-code-field';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/VerificationStyles';
import PatternBG from '../comps/PatternBG'
import GreenButton from '../comps/GreenButton'
import BackBar from '../comps/BackBar'
import theme from '../styles/ThemeStyles'

// Navigation
import * as navigateTo from '../../RouteConstants';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';


export default function Code({xpAmount, starAmount, UpdateMission}) {

  //console.log("Star Amount + XP: ", starAmount, xpAmount);

  // To enable/disable Green Button
  const [disabled, setDisabled] = useState(true);

  // In Progress Missions
  const [progressMissions, setProgressMissions] = useState([]);

  // Mission Success Image
  const missionSuccess = require('../assets/imgs/mission-success.png');

	/*
	 *****************************************************************
	 *****************************************************************
	*/

    const GetProgressMissions = async()=>{
      var user_id = await AsyncStorage.getItem("user_id");
      user_id = parseInt(user_id);

      try {
        // Read table from following data
        // Status = 2 -> In Progress Missions
        var progress = await ax("completion_list_read", {user_id:user_id, status:2});

        console.log("In Progress Missions: ", progress);

        setProgressMissions(progress);
      } catch (error){
        console.log("Error GetProgressMission", error.message)
      }
    }

	/*
	 *****************************************************************
	 *****************************************************************
  */

 // Verify Code
 function VerifyCode(code){
    var mission_id;

    // Loop through array of in progress missions to get index number
    for(i = 0; i < progressMissions.length; i++){
      mission_id = i;
    }

    // Check to see if code input matches the code of selected in progress mission
    if (code === progressMissions[mission_id].code){
      console.log("Code Success");

      setDisabled(false); // Enable Verify button

    } else {
      console.log("Code Failed");

      alert('You have entered an incorrect code. Please try again.');
      setDisabled(true); // Disable Verify button

    }

    console.log("Code Input: ", code);
  }

  /*
	 *****************************************************************
	 *****************************************************************
  */

  // Load once
  useEffect(()=>{
    GetProgressMissions();
    }, [])

  /*
   *****************************************************************
   *****************************************************************
  */

  return (
    <View style={{backgroundColor: "white"}}>
      <BackBar />

      <View style={styles.container}>
      {/* Headings */}
        <Text style={styles.heading}>Verification Code</Text>
        <Text style={styles.body}>Please enter the code given to you for completing mission</Text>
        <Text style={styles.enterCode}>Enter Code</Text>

        {/* Code Input container */}
        <View style={styles.codeInputContainer}>
        <CodeInput
          onFulfill={VerifyCode}
          codeLength={4}
          blurOnSubmit={true}
          variant='border-circle'
          size={60}
          cellBorderWidth={4}
          activeColor={theme.darkGreen}
          inactiveColor={theme.darkGreen}
          inputPosition='full-width'
        />
        </View >

        {/* Verify Button */}
        <View style={styles.verifyBut}>
          <GreenButton
            title='Verify'
            width={309} height={43}
            disabled={disabled}
            onPress={()=>{
              // Update mission status to 3 = Completed
              UpdateMission();
              navigateTo.RewardModal({
                // Pass over following values
                xpAmount,
                starAmount,
                heading: "Mission Success!",
                description: "Your mission was successfully verified. Collect more stars as you complete missions",
                imagePath: missionSuccess,
            });
          }}/>

          {/* QR Code Redirect */}
          <TouchableOpacity onPress={navigateTo.VerifyQR}>
            <Text style={styles.redirect}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
