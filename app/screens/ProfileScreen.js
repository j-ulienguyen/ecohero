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
                <ProfileCardMin
                    avatarPath = {require('../assets/imgs/can-avatar.png')}
                    level = "5"
                    username = "hardcoreHenry"
                />

                {/* Settings - Gear Icon */}
                <SettingsIcon/>

                <View style={styles.achievementSection}>
                    {/* Total Stars Card */}
                    <AchievementCard
                        count = "99"
                        imagePath = {require('../assets/imgs/star-icon.png')}
                        name = "Total Stars"
                        description = "All of the stars that you have earned so far on EcoHero"
                    />

                    {/* Completed Missions Card */}
                    <AchievementCard
                        count = "75"
                        imagePath = {require('../assets/imgs/complete-mission-icon.png')}
                        name = "Completed Missions"
                        description = "All of the missions that you have completed so far on EcoHero"
                    />
                </View>

                <View style={styles.centerContent}>
                    <View style={styles.badgeSection}>
                        {/* Badge Heading */}
                        <Text style={styles.sectionHeading}>Badges</Text>

                        {/* Badges x 6 */}
                        <View style={styles.badgeContainer}>
                            <ProfileBadge
                                imagePath = {require('../assets/imgs/eco-badge.png')}
                                lockIcon = {null}
                                disabled = {false}
                            />
                            <ProfileBadge
                                imagePath = {require('../assets/imgs/10-badge.png')}
                                lockIcon = {null}
                                disabled = {false}
                            />
                            <ProfileBadge
                                imagePath = {require('../assets/imgs/crown-badge.png')}
                                lockIcon = {null}
                                disabled = {false}
                            />
                            <ProfileBadge
                                imagePath = {require('../assets/imgs/locked-badge.png')}
                                lockIcon = {require('../assets/imgs/lock-icon.png')}
                                disabled = {true}
                            />
                            <ProfileBadge
                                imagePath = {require('../assets/imgs/locked-badge.png')}
                                lockIcon = {require('../assets/imgs/lock-icon.png')}
                                disabled = {true}
                            />
                            <ProfileBadge
                                imagePath = {require('../assets/imgs/locked-badge.png')}
                                lockIcon = {require('../assets/imgs/lock-icon.png')}
                                disabled = {true}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}