import React from 'react';
import {View, Text} from 'react-native';

// Import comps below
import TreeBg from '../comps/TreeBg';
import EcoHeroLogo from '../comps/EcoHeroLogo';
import SignInEntry from '../comps/SignInEntry';

// Subscreen comps
import ForgotPW from '../subscreens/ForgotPWSubscreen';
import BackBar from '../comps/BackBar';


export default function SigninScreen(){
    // UI
    return (
        <View>
            {/* Fixed Tree BG */}
            {/* <TreeBg/> */}

            {/* Signin */}
            {/* <EcoHeroLogo/>
            <SignInEntry/> */}

            {/* Forgot PW */}
            {/* <BackBar/>
            <ForgotPW/> */}
        </View>
    )
}