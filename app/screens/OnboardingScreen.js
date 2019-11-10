import React from 'react';
import {View, Text} from 'react-native';

// Import comps below
import EcoHeroLogo from '../comps/EcoHeroLogo';
import GetStarted from '../comps/onboard/GetStarted';
import BackBar from '../comps/BackBar';

// Import subscreens below
import OnboardSteps from '../subscreens/OnboardSteps'


export default function OnboardingScreen(){
    // UI
    return (
        <View>
            {/* Get Started */}
            <View style={{top: 50}}>
                <EcoHeroLogo />
            </View>
                <GetStarted />

            {/* Onboarding Steps 1-3 */}
            {/* <BackBar />
            <OnboardSteps /> */}
        </View>
    )
}