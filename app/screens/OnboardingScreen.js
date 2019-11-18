import React from 'react';
import {View, Text} from 'react-native';

// Import comps below
import BackBar from '../comps/BackBar';

// Import subscreens below
import OnboardSteps from '../subscreens/OnboardSteps'


export default function OnboardingScreen(){
    // UI
    return (
        <View style={{flex:1}}>

            {/* Onboarding Steps 1-3 */}
            <BackBar />
            <OnboardSteps />
        </View>
    )
}