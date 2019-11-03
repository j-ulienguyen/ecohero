import React from 'react';
import {View, Text} from 'react-native';

// Import comps below
import EcoHeroLogo from '../comps/EcoHeroLogo';
import GetStarted from '../comps/GetStarted';


export default function OnboardingScreen(){
    // UI
    return (
        <View>
            {/* Get Started */}
            <View style={{top: 50}}>
             <EcoHeroLogo />
            </View>
                <GetStarted />
        </View>
    )
}