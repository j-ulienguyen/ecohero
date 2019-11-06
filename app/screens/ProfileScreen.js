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
                        cardBG = {theme.darkGreen}
                        countBG = "#8AD560"
                        count = "99"
                        imagePath = {require('../assets/imgs/star-icon.png')}
                        name = "Total Stars"
                        description = "All of the stars that you have earned so far on EcoHero"
                    />

                    {/* Completed Missions Card */}
                    <AchievementCard
                        cardBG = "#7FC6E4"
                        countBG = "#95D5EC"
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
                                badgeState = "unlocked"
                                imagePath = {require('../assets/imgs/eco-badge.png')}
                                disabled = {false}
                            />
                            <ProfileBadge
                                imagePath = {require('../assets/imgs/crown-badge.png')}
                                badgeState = "unlocked"
                                disabled = {false}
                            />
                            <ProfileBadge
                                badgeState = "unlocked"
                                imagePath = {require('../assets/imgs/10-badge.png')}
                                disabled = {false}
                            />
                            <ProfileBadge
                                badgeState = "locked"
                                disabled = {true}
                            />
                            <ProfileBadge
                                badgeState = "locked"
                                disabled = {true}
                            />
                            <ProfileBadge
                                badgeState = "locked"
                                disabled = {true}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}