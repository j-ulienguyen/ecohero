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

export const Home = (d)=>{
    console.log("Home", d)
    Actions.home(d)
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

export const VerifyCode = (d)=>{
    console.log("Verify", d);
    Actions.verifyCode(d)
}

export const VerifyQR = ()=>{
    Actions.verifyQR()
}

export const Back = ()=>{
    Actions.pop()
}

export const LevelupModal = (d)=>{
    Actions.levelupModal(d)
}

export const RewardModal = (d)=>{
    console.log("Reward", d);
    Actions.rewardModal(d)
}

export const BadgeModal = (d)=>{
    // Ability to pass props
    Actions.badgeModal(d)
}
