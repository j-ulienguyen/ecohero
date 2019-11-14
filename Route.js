import React from 'react';
import {Router, Stack, Scene, Lightbox} from 'react-native-router-flux';

// Import Screens comps below
import SigninScreen from './app/screens/SigninScreen';
import OnboardingScreen from './app/screens/OnboardingScreen';
import HomeScreen from './app/screens/HomeScreen';
import MissionsScreen from './app/screens/MissionsScreen';
import LeaderboardScreen from './app/screens/LeaderboardScreen';
import ProfileScreen from './app/screens/ProfileScreen';

// Import Subscreens comps below
import BasicProfile from './app/subscreens/BasicProfileSubscreen';
import ChooseAvatar from './app/subscreens/ChooseAvatarSubscreen';
import ForgotPW from './app/subscreens/ForgotPWSubscreen';
import Code from './app/subscreens/Verification_4Digit';
import QRCode from './app/subscreens/Verification_QR';

// Import Modals
import LevelUpModal from './app/comps/home/LevelUpModal';
import RewardModal from './app/comps/RewardModal';
import BadgeModal from './app/comps/profile/BadgeModal';


export default function Route(){
    return (
        <Router>
            <Stack key="root" hideNavBar={true} >
                {/* ============================= */}
                <Scene
                    key = "signin"
                    title = "Signin Screen"
                    component = {SigninScreen}
                    initial = {true} // App will start with this screen
                    swipeEnabled={false}
                    animationEnabled={false}
                />
                <Scene
                    key = "basicProfile"
                    title = "Basic Profile"
                    component = {BasicProfile}
                    swipeEnabled={false}
                    animationEnabled={false}
                />
                <Scene
                    key = "chooseAvatar"
                    title = "Choose Avatar"
                    component = {ChooseAvatar}
                    swipeEnabled={false}
                    animationEnabled={false}
                />
                <Scene
                    key = "forgotPW"
                    title = "Forgot Password"
                    component = {ForgotPW}
                    swipeEnabled={false}
                    animationEnabled={false}
                />
                {/* ============================= */}
                <Scene
                    key = "onboard"
                    title = "Onboarding Screen"
                    component = {OnboardingScreen}
                />
                {/* ============================= */}
                <Scene
                    key = "home"
                    title = "Home Screen"
                    component = {HomeScreen}
                    swipeEnabled={false}
                    animationEnabled={false}
                />
                <Scene
                    key = "missions"
                    title = "Missions Screen"
                    component = {MissionsScreen}
                    swipeEnabled={false}
                    animationEnabled={false}
                />
                <Scene
                    key = "leaderboard"
                    title = "Leaderboard Screen"
                    component = {LeaderboardScreen}
                    swipeEnabled={false}
                    animationEnabled={false}
                />
                <Scene
                    key = "profile"
                    title = "Profile Screen"
                    component = {ProfileScreen}
                    swipeEnabled={false}
                    animationEnabled={false}
                />
                {/* ============================= */}
                <Scene
                    key = "verifyCode"
                    title = "Verification Digit Code Screen"
                    component = {Code}
                    swipeEnabled={false}
                    animationEnabled={false}
                />
                <Scene
                    key = "verifyQR"
                    title = "Verification QR Code Screen"
                    component = {QRCode}
                    swipeEnabled={false}
                    animationEnabled={false}
                />
                {/* ============================= */}
                <Scene
                    key = "levelupModal"
                    title = "Level Up Modal"
                    component = {LevelUpModal}
                />
                <Scene
                    key = "rewardModal"
                    title = "Reward Modal"
                    component = {RewardModal}
                />
                <Scene
                    key = "badgeModal"
                    title = "Badge Modal"
                    component = {BadgeModal}
                />
            </Stack>
        </Router>
    )
};