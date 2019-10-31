import React from 'react';
import {View, Text} from 'react-native';

// Import comps below
import EcoHeroLogo from '../comps/EcoHeroLogo';
import TreeBg from '../comps/TreeBg';
import SignInEntry from '../comps/SignInEntry';

// Subscreen comps
import ForgotPW from '../subscreens/ForgotPWSubscreen';
import BackBar from '../comps/BackBar';

export default function SigninScreen(){
    // UI
    return (
        <View>
            {/* Signin */}
            <EcoHeroLogo />
            <SignInEntry />
            <TreeBg /> 

            {/* Forgot PW */}            
            {/* <BackBar /> 
            <ForgotPW />
            <TreeBg /> */}
        </View>
    )
}