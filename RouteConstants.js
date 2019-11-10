import { Actions } from "react-native-router-flux"


// Create functions that navigates to screen specified
export const Signin = ()=>{
    Actions.signin()
}

export const Signup = ()=>{
    Actions.signup()
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


// How To Use:
// import * as navigateTo from 'pathTo/RouteConstants';