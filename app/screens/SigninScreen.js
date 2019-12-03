import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';

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
    const [valid, setValid] = useState("");
    const [disabled2, setDisabled2] = useState(false);

	/*
	 *****************************************************************
	 *****************************************************************
	*/

    // Store User ID
    var StoreUserID = async(id)=>{
        try {
            await AsyncStorage.setItem("user_id", JSON.stringify(id));
            console.log("Store UserID: ", id)
        } catch (error){
            console.log("Error saving data", error.message);
        }
        // console.log("End of StoreUserID");
    }

    // Store Username
    var StoreUsername = async(username)=>{
        try {
            await AsyncStorage.setItem("username", username);
            console.log("StoreUsername: ", username)
        } catch (error){
            console.log("Error saving data", error.message);
        }
        // console.log("End of StoreUsername");
    }

    // Get User ID
    var GetUserID = async()=>{
        try {
            var getID = await AsyncStorage.getItem("user_id");
            console.log("Get UserID: ", getID);
        } catch (error){
            console.log("Error getting data", error.message);
        }
        // console.log("End of GetUserID");
    }

	/*
	 *****************************************************************
	 *****************************************************************
	*/

    // Create Account
    const CreateAccount = async()=>{
        try {
            var userAccount = await ax("users_create", {username, password, level:1, mission_count:0,star_count:0, xp_amount:0});
            console.log("Create UserID: ", userAccount[0].id);
            console.log("CreateAccount: ", userAccount);

            StoreUserID(userAccount[0].id);
        } catch (error){
            console.log("Error CreateAccount", error.message);
        }
        // console.log("End of CreateAccount");
    }

	/*
	 *****************************************************************
	 *****************************************************************
	*/

    // Login Account
    const LoginAccount = async()=>{
        // console.log(username,password);
        try {
            var userAccount = await ax("users_auth", {username, password});
            // console.log("Auth UserID: ", userAccount[0].id);
            console.log("LoginAccount: ", userAccount);

            await StoreUserID(userAccount[0].id);
            await StoreUsername(userAccount[0].username);

            navigateTo.Home();
        } catch (error){
            console.log("Error LoginAccount", error.message);
        }
        console.log("End of LoginAccount");
    }

	/*
	 *****************************************************************
	 *****************************************************************
	*/

    // Load once
    useEffect(()=>{
        GetUserID();
    }, [])

	/*
	 *****************************************************************
	 *****************************************************************
	*/

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
                CreateAccount = {CreateAccount}
                disabled2 = {disabled2}
            />
        )
    }

	/*
	 *****************************************************************
	 *****************************************************************
	*/

    // UI
    return (
            <KeyboardAvoidingView 
                behavior="position"
                // enabled
                style={styles.whiteBg}
            >
        {/* <TouchableWithoutFeedback onPress = {Keyboard.dismiss}> */}
            {/* Fixed Tree BG */}
            <TreeBg/>
            {/* EcoHero Logo */}
            <EcoHeroLogo/>

            <View style={styles.space}></View>

            {/* Sign In / Sign Up Tabs */}
            <MaterialTabs
                items={['Sign In', 'Sign Up']}
                selectedIndex={selectedTab}
                onChange={setSelectedTab}
                barColor="#fff"
                indicatorColor="#74C64D"
                activeTextColor="#74C64D"
                inactiveTextColor="#000"
            />

            <View style={[styles.container, styles.whiteBg]}>
                {/* Username Field Entry */}
                <View style={styles.userInput}>
                    <Image
                        style={styles.inputIcon}
                        source={require('../assets/imgs/user-icon.png')}
                        />
                    <TextInput
                        placeholder = "Username"
                        maxLength={13}
                        // require = ""
                        onChangeText = {(txt)=>{
                            username = txt;
                            //setTxt(txt);
                            if (username === '' || password === ''){
                                setDisabled2(false);
                                // alert('empty.');
                            } else {
                                setDisabled2(true);
                            }
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
                            
                            if (username === '' || password === '' || password.length < 6){
                                setDisabled2(false);
                                setError('Password must be atleast 6 characters.');
                            }
                            if (password.length >= 6) {
                                setValid("");
                                setError("");
                            } else {
                                setDisabled2(true);
                            }
                        }}
                        
                        secureTextEntry={true}
                        />
                    {/* Input Error Message */}
                    <Text style={styles.errorMsg}>{error}</Text>
                    {/* Input Valid Message */}
                    <Text style={styles.validMsg}>{valid}</Text>
                </View>
            </View>

            {signin}
            {/* <View style={{ height: 60 }} /> */}
        {/* </SafeAreaViestyle={styles.whiteBg}> */}
    {/* </TouchableWithoutFeedback> */}
        </KeyboardAvoidingView>
    );
};
