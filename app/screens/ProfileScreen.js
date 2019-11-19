import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Import comps & styles below
import styles from '../styles/ProfileScreenStyles';
import theme from '../styles/ThemeStyles';
import PatternBG from '../comps/PatternBG';
import ProfileCard from '../comps/home/ProfileCard';
import SettingsIcon from '../comps/profile/SettingsIcon';
import AchievementCard from '../comps/profile/AchievementCard';
import ProfileBadge from '../comps/profile/ProfileBadge';
import NavBar from '../comps/NavBar';

// Import data files below
import {badges} from '../data/BadgeData';


export default function ProfileScreen(){
    // UI
    return (
        <View style={styles.container}>
			{/* Fixed Pattern BG */}
			<PatternBG/>

            <ScrollView>
                {/* Profile Card - Compact Version */}
                <View style={{marginTop: -150}}>
                    <ProfileCard
                        type="compact"
                        avatarPath={require('../assets/imgs/can-avatar.png')}
						username="hardcoreHenry"
						level={5}
                    />
                </View>

                {/* Settings - Gear Icon */}
                <SettingsIcon/>

                <View style={styles.achievementSection}>
                    {/* Total Stars Card */}
                    <AchievementCard
                        type = "totalStars"
                        count = {10}
                    />
                    {/* Completed Missions Card */}
                    <AchievementCard
                        type = "completedMissions"
                        count = {5}
                    />
                </View>

                <View style={styles.centerContent}>
                    <View style={styles.badgeSection}>
                        {/* Badge Heading */}
                        <Text style={styles.sectionHeading}>Badges</Text>

                        {/* Badges x 6 */}
                        <View style={styles.badgeContainer}>
                            {
                                badges.map((obj, i)=>{
                                    return <ProfileBadge
                                        key = {i}
                                        badgeName = {obj.badgeName}
                                        description = {obj.description}
                                        imagePath = {obj.imagePath}
                                        status = {obj.status}
                                    />
                                })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Navigation Bar */}
            <NavBar currentScreen="ProfileScreen"/>
        </View>
    )
}