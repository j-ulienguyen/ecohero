import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../styles/ProfileCardStyles';
import UserBubble from './UserBubble';


export default function ProfileCard(){
    // UI
    return (
        <View style={styles.container}>
            {/* Green BG Card */}
            <Image
                style = {styles.bgCard}
                source = {require('../assets/imgs/profile-card-bg.png')}
            />

            {/* User Speech Bubble */}
            <View style={styles.userBubbleContainer}>
                <UserBubble/>
            </View>

            {/* Stars / Avatar / Missions */}
            <View style={styles.badgesContainer}>
                {/* Star Count Badge */}
                <View style={styles.hexBadgeContainer}>
                    {/* Hex Badge */}
                    <Image
                        style = {styles.hexBadge}
                        source = {require('../assets/imgs/hex-badge.png')}
                    />
                    {/* Badge Content */}
                    <View style={styles.hexBadgeContent}>
                        <Text style={styles.countText}>5</Text>
                        <Image
                            source = {require('../assets/imgs/star-icon.png')}
                        />
                    </View>
                </View>

                {/* Avatar / Level */}
                <View>
                    {/* Circle Level Stroke */}
                    <View style={styles.avatar}>
                        {/* Avatar Icon */}
                        <Image
                            style = {styles.avatarIcon}
                            resizeMode = "contain"
                            source = {require('../assets/imgs/can-avatar.png')}
                        />

                        {/* Level Badge */}
                        <View style={styles.levelContainer}>
                            <Image
                                style = {styles.levelBadge}
                                source = {require('../assets/imgs/level-badge.png')}
                            />

                            {/* Level # */}
                            <Text style={styles.levelText}>1</Text>
                        </View>
                    </View>
                </View>

                {/* Missions Count Badge */}
                <View style={styles.hexBadgeContainer}>
                    {/* Hex Badge */}
                    <Image
                        style = {styles.hexBadge}
                        source = {require('../assets/imgs/hex-badge.png')}
                    />
                    {/* Badge Content */}
                    <View style={styles.hexBadgeContent}>
                        <Text style={styles.countText}>0</Text>
                        <Text style={styles.missionLabel}>Missions</Text>
                    </View>
                </View>
            </View>

            {/* Username */}
            <View style={styles.usernameContainer}>
                <Text style={styles.usernameText}>hardcoreHenry</Text>
            </View>
        </View>
    )
}