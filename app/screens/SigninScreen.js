import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';

// Import comps below
import TreeBg from '../comps/TreeBg';
import EcoHeroLogo from '../comps/EcoHeroLogo';
import SignInEntry from '../comps/SignInEntry';
import SignUpEntry from '../comps/SignUpEntry';
import MaterialTabs from 'react-native-material-tabs';

// import styles
import styles from '../styles/MaterialTabsStyles';

// Subscreen comps
import ForgotPW from '../comps/ForgotPasswordSubscreen';
import BackBar from '../comps/BackBar';


export default function SigninScreen(){
    const [selectedTab, setSelectedTab] = useState(0);

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
            <TreeBg style={{left:-700}}/>
            {/* EcoHero Logo */}
            <EcoHeroLogo/>
            {/* <View style={styles.container}> */}
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

            {signin}

        </SafeAreaView>
    );
};