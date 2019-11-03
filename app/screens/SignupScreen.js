import React from 'react';
import {View, Text} from 'react-native';

// Import comps below
import TreeBg from '../comps/TreeBg';
import EcoHeroLogo from '../comps/EcoHeroLogo';
import SignUpEntry from '../comps/SignUpEntry';

export default function SignupScreen(){
    // UI
    return (
        <View>
            {/* Fixed Tree BG */}
            <TreeBg/>

            {/* Signin */}
            <EcoHeroLogo/>
            <SignUpEntry/>

        </View>
    )
}