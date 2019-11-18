import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/OnboardStepsStyles';
import theme from '../styles/ThemeStyles';

import * as navigateTo from '../../RouteConstants';

import AppIntroSlider from 'react-native-app-intro-slider';

// export default function OnboardSteps(){

   const onboarding = [
      {
        key: 'step1',
        title: 'Missions',
        text: 'Missions are updated monthly and each mission will reflect a certain number of stars and XP.',
        image: require('../assets/imgs/mission-onboard.png'),
      },
      {
       key: 'step2',
       title: 'Proof of Mission',
       text: 'To verify that you completed your mission, you must either enter or scan a special code given to you.',
       image: require('../assets/imgs/proof-onboard.png'),
      },
      {
       key: 'step3',
       title: 'Rewards',
       text: 'Complete missions to receive rewards and badges. The more stars you collect the better the prize!',
       image: require('../assets/imgs/rewards-onboard.png'),
      },
    ];
   export default function OnboardSteps(){

    const _renderNextButton = () => {
         return (
            <View style={styles.greenBtn}>
               <Text style={styles.btnText}>Next</Text>
          </View>
         );
       };

     const _renderSkipButton = () => {
         return (
            <View>
               <Text style={styles.skipTxt}>SKIP</Text>
            </View>
         )
     };

     const _renderDoneButton = () => {
      return (
         <View>
            <Text style={styles.doneTxt}>DONE</Text>
         </View>
      )
   };

   const _renderItem = ({item}) => {
      console.log(item);
      return (
         <View style={styles.container}>
            <Image
               style = {styles.stepImg}
               source = {item.image}
               />
            <Text style={styles.headTxt}>{item.title}</Text>
            <Text style={styles.subTxt}>{item.text}</Text>
         </View>
      );
   }

   return (
      <View style={{flex:1}}>
         <AppIntroSlider 
            renderItem={_renderItem} 
            slides={onboarding} 
            showSkipButton={true}
            onDone={navigateTo.RewardModal}
            renderNextButton={_renderNextButton}
            renderSkipButton={_renderSkipButton}
            renderDoneButton={_renderDoneButton}
            activeDotStyle={{backgroundColor:theme.darkGreen}}
         />
      </View>
   )
};
  