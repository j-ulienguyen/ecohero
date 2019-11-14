import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView, Image, TextInput, KeyboardAvoidingView } from 'react-native';

// Import comps & styles below
import TreeBg from '../comps/TreeBg';
import EcoHeroLogo from '../comps/EcoHeroLogo';
import SignInEntry from '../comps/signin/SignInEntry';
import SignUpEntry from '../comps/signup/SignUpEntry';
import MaterialTabs from 'react-native-material-tabs';
// import styles from '../styles/MaterialTabsStyles';
import styles from '../styles/StartPageStyles';


var password = '';


export default function SigninScreen(){

    const [selectedTab, setSelectedTab] = useState(0);
    const [txt, setTxt] = useState("");
    const [error, setError] = useState('');
    const offset = (Platform.OS === 'android') ? -200 : 0;

    var signin = null;
    if (selectedTab === 0){
        signin = (
            <SignInEntry />
        )
    } else if (selectedTab === 1){
        signin = (
            <SignUpEntry />
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
                <KeyboardAvoidingView keyboardVerticalOffset={offset} behavior={"position"}>
                    {/* Username Field Entry */}
                    <View style={styles.userInput}>
                        <Image
                            style={styles.inputIcon}
                            source={require('../assets/imgs/user-icon.png')}
                        />
                        <TextInput
                            placeholder = "Username"
                            onChangeText = {(txt)=>{
                                setTxt(txt);
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
                                password=(txt);
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
                </KeyboardAvoidingView>
            </View>

            {signin}

        </SafeAreaView>
    );
};
