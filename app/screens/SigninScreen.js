import React from 'react';
import {View, Text} from 'react-native';

// Import comps below
import EcoHeroLogo from '../comps/EcoHeroLogo';
import TreeBg from '../comps/TreeBg';
import SignInEntry from '../comps/SignInEntry';


export default function SigninScreen(){
    // UI
    return (
        <View>
            <EcoHeroLogo />
            <SignInEntry />
            <TreeBg />
        </View>
    )
}