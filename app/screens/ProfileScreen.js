import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/ProfileScreenStyles';
import PatternBG from '../comps/PatternBG';
import ProfileCardMin from '../comps/ProfileCardMin';
import SettingsIcon from '../comps/SettingsIcon';
import AchievementCard from '../comps/AchievementCard';

import PrizeCard from '../comps/PrizeCard';
import MissionCard from '../comps/MissionCard';

export default function ProfileScreen(){
    // UI
    return (
        <View style={styles.container}>
			{/* Fixed Pattern BG */}
			<PatternBG/>

            <ScrollView>
                {/* Profile Card */}
                <ProfileCardMin/>

                {/* Settings - Gear Icon */}
                <SettingsIcon/>

                <View style={styles.achievementSection}>
                    {/* Total Stars Card */}
                    <AchievementCard/>

                    {/* Completed Missions Card */}
                    <AchievementCard/>
                </View>

                <View style={styles.badgeSection}>
                    {/* Badges */}

                </View>

            </ScrollView>
        </View>
    )
}