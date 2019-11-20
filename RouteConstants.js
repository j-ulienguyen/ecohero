import { Actions } from "react-native-router-flux"


// How To Use:
// 1. import * as navigateTo from 'pathTo/RouteConstants';
// 2. onPress={navigateTo.[SCREEN]}


// Create functions that navigates to screen specified
export const Signin = ()=>{
    Actions.signin()
}

export const ForgotPW = ()=>{
    Actions.forgotPW()
}

export const BasicProfile = ()=>{
    Actions.basicProfile()
}

export const ChooseAvatar = ()=>{
    Actions.chooseAvatar()
}

export const Onboard = ()=>{
    Actions.onboard()
}

export const OnboardSteps = ()=>{
    Actions.onboardSteps()
}

export const GetStarted = ()=>{
    Actions.getStarted()
}

export const Home = ()=>{
    console.log("test");
    Actions.home()
}

export const Missions = ()=>{
    Actions.missions()
}

export const Leaderboard = ()=>{
    Actions.leaderboard()
}

export const Profile = ()=>{
    Actions.profile()
}

export const VerifyCode = ()=>{
    Actions.verifyCode()
}

export const VerifyQR = ()=>{
    Actions.verifyQR()
}

export const Back = ()=>{
    Actions.pop()
}

export const LevelupModal = ()=>{
    Actions.levelupModal()
}

export const RewardModal = ()=>{
    Actions.rewardModal()
}

export const BadgeModal = (params)=>{
    // Ability to pass props
    Actions.badgeModal(params)
}
