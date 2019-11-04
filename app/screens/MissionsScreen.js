import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps below
import styles from '../styles/MissionsScreenStyles';
import PatternBG from '../comps/PatternBG';
import MissionBoardCard from '../comps/missions/MissionBoardCard';
import MissionCard from '../comps/missions/MissionCard';
import BonusMissionCard from '../comps/missions/BonusMissionCard';


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
                    <MissionBoardCard/>

                    {/* Mission Card Section */}
                    <View style={styles.cardSection}>
                        <BonusMissionCard/>
                        <MissionCard/>
                        <MissionCard/>
                        <MissionCard/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}