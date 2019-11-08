import React from 'react';
import {View, Text} from 'react-native';

// Import comps below
import TreeBg from '../comps/TreeBg';
import EcoHeroLogo from '../comps/EcoHeroLogo';
import SignUpEntry from '../comps/signup/SignUpEntry';
import StepProgressBar from '../comps/signup/StepProgressBar';
import BackBar from '../comps/BackBar';

// Import subcomps below
import BasicProfile from '../subscreens/BasicProfileSubscreen';
import ChooseAvatar from '../subscreens/ChooseAvatarSubscreen';

export default function SignupScreen(){
    // UI
    return (
        <View>
            {/* Fixed Tree BG */}
            <TreeBg/>

            {/* Signup */}
            <EcoHeroLogo/>
            <SignUpEntry/>

            {/* Step 1 - EcoHero Profile */}
                {/* Progress Bar Component */}
                    {/* <StepProgressBar />
                    <BackBar />
                    <BasicProfile /> */}

            {/* Step 2 - Choose Avatar NO TREE BG */}
                {/* Progress Bar Component */}
                {/* <StepProgressBar />
                    <BackBar />
                    <ChooseAvatar /> */}

        </View>
    )
}