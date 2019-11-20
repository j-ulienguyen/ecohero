import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView, Image, TextInput } from 'react-native';

// Import comps & styles below
import TreeBg from '../comps/TreeBg';
import EcoHeroLogo from '../comps/EcoHeroLogo';
import SignInEntry from '../comps/signin/SignInEntry';
import SignUpEntry from '../comps/signup/SignUpEntry';
import MaterialTabs from 'react-native-material-tabs';
// import styles from '../styles/MaterialTabsStyles';
import styles from '../styles/StartPageStyles';

// Database & Storage
import {ax} from '../services/axios';
import AsyncStorage from '@react-native-community/async-storage';

// Navigation
import * as navigateTo from '../../RouteConstants';


var username = "";
var password = "";


export default function SigninScreen(){

    // Material Tabs
    const [selectedTab, setSelectedTab] = useState(0);

    // Username + Password Entry
    const [txt, setTxt] = useState("");
    const [error, setError] = useState("");


    var StoreUserID = async(id)=>{
        try {
            await AsyncStorage.setItem("user_id", JSON.stringify(id));
            console.log("Store User ID: ", id)
        } catch (error){
            console.log("Error saving data");
        }
        console.log("StoreUserID Done");
    }

    var GetUserID = async()=>{
        try {
            var getID = await AsyncStorage.getItem("user_id");
            console.log("Get User ID: ", getID);
        } catch (error){
            console.log("Error getting data");
        }

        console.log("GetUserID Done");
    }

    const CreateAccount = async()=>{
        var userAccount = await ax("users_create", {username, password});
        console.log("Create User ID: ", userAccount[0].id);

        StoreUserID(userAccount[0].id);
    }

    const LoginAccount = async()=>{
        var userAccount = await ax("users_auth", {username, password});
        console.log("Auth User ID: ", userAccount[0].id);
        await StoreUserID(userAccount[0].id);
        navigateTo.Home();
    }




    useEffect(()=>{
        GetUserID();
    }, [])


    var signin = null;
    if (selectedTab === 0){
        signin = (
            <SignInEntry
                LoginAccount = {LoginAccount}
            />
        )
    } else if (selectedTab === 1){
        signin = (
            <SignUpEntry
                CreateAccount={CreateAccount}
            />
        )
    }


    // UI
    return (
        <SafeAreaView style={styles.whiteBg}>
            {/* Fixed Tree BG */}
            <TreeBg/>
            {/* EcoHero Logo */}
            <EcoHeroLogo/>

            <View style={styles.space}></View>

            <View>
                <MaterialTabs
                    items={['Sign In', 'Sign Up']}
                    selectedIndex={selectedTab}
                    onChange={setSelectedTab}
                    barColor="#fff"
                    indicatorColor="#74C64D"
                    activeTextColor="#74C64D"
                    inactiveTextColor="#000"
                />
            </View>

            <View style={[styles.container, styles.whiteBg]}>
                {/* Username Field Entry */}
                <View style={styles.userInput}>
                    <Image
                        style={styles.inputIcon}
                        source={require('../assets/imgs/user-icon.png')}
                    />
                    <TextInput
                        placeholder = "Username"
                        onChangeText = {(txt)=>{
                            username = txt;
                            //setTxt(txt);
                        }}
                    />
                </View>

                {/* Password Field Entry */}
                <View style={styles.passInput}>
                    <Image
                        style={styles.inputIcon}
                        source={require('../assets/imgs/lock-icon.png')}
                    />
                    <TextInput
                        placeholder = "Password"
                        onChangeText = {(txt)=>{
                            password = txt;

                            if (password.length < 6){
                                setError('Your password is too short!')
                            } else {
                                setError('Your password is good to go!');
                            }
                        }}
                        secureTextEntry={true}
                    />
                    {/* Input Error Message */}
                    <Text style={styles.errorMsg}>{error}</Text>
                </View>
            </View>

            {signin}

        </SafeAreaView>
    );
};
