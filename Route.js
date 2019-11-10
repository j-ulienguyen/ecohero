import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

// Import Screens comps below
import SigninScreen from './app/screens/SigninScreen';
import SignupScreen from './app/screens/SignupScreen';
import OnboardingScreen from './app/screens/OnboardingScreen';
import HomeScreen from './app/screens/HomeScreen';
import MissionsScreen from './app/screens/MissionsScreen';
import LeaderboardScreen from './app/screens/LeaderboardScreen';
import ProfileScreen from './app/screens/ProfileScreen';

// Import Subscreens comps below
import BasicProfile from './app/subscreens/BasicProfileSubscreen';
import ChooseAvatar from './app/subscreens/ChooseAvatarSubscreen';
import ForgotPW from './app/subscreens/ForgotPWSubscreen';


export default function Route(){
    return (
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Scene
                    key = "signin"
                    title = "Signin Screen"
                    component = {SigninScreen}
                    //initial = {true} // App will start with this screen
                />
                <Scene
                    key = "signup"
                    title = "Signup Screen"
                    component = {SignupScreen}
                />
                <Scene
                    key = "onboard"
                    title = "Onboarding Screen"
                    component = {OnboardingScreen}
                />
                <Scene
                    key = "home"
                    title = "Home Screen"
                    component = {HomeScreen}
                    initial = {true}
                />
                <Scene
                    key = "missions"
                    title = "Missions Screen"
                    component = {MissionsScreen}
                />
                <Scene
                    key = "leaderboard"
                    title = "Leaderboard Screen"
                    component = {LeaderboardScreen}
                />
                <Scene
                    key = "profile"
                    title = "Profile Screen"
                    component = {ProfileScreen}
                />
            </Stack>
        </Router>
    )
};