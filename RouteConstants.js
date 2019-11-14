import { Actions } from "react-native-router-flux"


// How To Use:
// Navigation
// import * as navigateTo from 'pathTo/RouteConstants';


// Create functions that navigates to screen specified
export const Signin = ()=>{
    Actions.signin()
}

export const Signup = ()=>{
    Actions.signup()
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

export const Home = ()=>{
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
