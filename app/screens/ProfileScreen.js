import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/ProfileScreenStyles';
import PatternBG from '../comps/PatternBG';
import SettingsIcon from '../comps/SettingsIcon';
import ProfileCardMin from '../comps/ProfileCardMin';
import AchievementCard from '../comps/AchievementCard';


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

                <View style={styles.centerContent}>
                    <View style={styles.badgeSection}>
                        <Text style={styles.sectionHeading}>Badges</Text>
                        {/* Badges */}

                    </View>
                </View>

            </ScrollView>
        </View>
    )
}