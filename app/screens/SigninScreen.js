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


var username = "";
var password = "";


export default function SigninScreen({disabled}){

    // Material Tabs
    const [selectedTab, setSelectedTab] = useState(0);

    // Username + Password Entry
    const [txt, setTxt] = useState("");
    const [error, setError] = useState("");
    const [valid, setValid] = useState("");
    const [disabled2, setDisabled2] = useState(false);


    const CreateAccount = async()=>{
        var userAccount = await ax("users_create", {username, password});
        console.log("User ID: ", userAccount[0].id);

        // Store account details
        StoreUserID();
        //await AsyncStorage.setItem("user_id", JSON.stringify(userAccount[0].id));
    }


    var StoreUserID = async()=>{
        await AsyncStorage.setItem("user_id", userAccount.id);
    }

    var GetUserID = async()=>{
        var getID = await AsyncStorage.getItem("user_id");
        console.log("Get User ID: ", getID);
    }


    useEffect(()=>{
        GetUserID();
    }, [])


    var signin = null;
    if (selectedTab === 0){
        signin = (
            <SignInEntry/>
        )
    } else if (selectedTab === 1){
        signin = (
            <SignUpEntry
                CreateAccount={CreateAccount}
                disabled2={disabled2}
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
                                setValid('Password is good to go.');
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

        </SafeAreaView>
    );
};
