import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps below
import styles from '../styles/MissionsScreenStyles';
import PatternBG from '../comps/PatternBG';
import MissionBoardCard from '../comps/missions/MissionBoardCard';
import MissionCard from '../comps/missions/MissionCard';


export default function MissionsScreen(){
    // UI
    return (
        <View style={styles.container}>
            {/* Fixed Pattern BG */}
            <PatternBG/>

            {/* Scrollable Content - On Top */}
            <ScrollView>
                <View>
                    {/* Mission Board Card */}
                    <MissionBoardCard
                        missionStatement='“Our mission is to recycle and maintain a clean environment”'
                    />

                    {/* Mission Card Section */}
                    <View style={styles.cardSection}>
                        <MissionCard
                            type="bonus"
                            iconPath={require('../assets/imgs/recycle-icon.png')}
                            starAmount={5}
                            xpAmount={50}
                        />
                        <MissionCard
                            type="normal"
                            iconPath={require('../assets/imgs/reduce-icon.png')}
                            starAmount={5}
                            xpAmount={50}
                        />
                        <MissionCard
                            type="normal"
                            iconPath={require('../assets/imgs/reuse-icon.png')}
                            starAmount={5}
                            xpAmount={50}
                        />
                        <MissionCard
                            type="normal"
                            iconPath={require('../assets/imgs/eco-icon.png')}
                            starAmount={5}
                            xpAmount={50}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}