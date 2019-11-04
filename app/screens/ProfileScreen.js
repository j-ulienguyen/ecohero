import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/ProfileScreenStyles';
import PatternBG from '../comps/PatternBG';
import SettingsIcon from '../comps/profile/SettingsIcon';
import ProfileCardMin from '../comps/profile/ProfileCardMin';
import AchievementCard from '../comps/profile/AchievementCard';
import ProfileBadge from '../comps/profile/ProfileBadge';


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
                        {/* Badge Heading */}
                        <Text style={styles.sectionHeading}>Badges</Text>

                        {/* Badges x 6 */}
                        <View style={styles.badgeContainer}>
                            <ProfileBadge/>
                            <ProfileBadge/>
                            <ProfileBadge/>
                            <ProfileBadge/>
                            <ProfileBadge/>
                            <ProfileBadge/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}