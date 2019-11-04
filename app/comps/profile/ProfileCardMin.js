import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/ProfileCardMinStyles';


export default function ProfileCardMin(){
    // UI
    return (
        <View style={styles.container}>
            {/* Green BG Card */}
            <Image
                style = {styles.bgCard}
                source = {require('../../assets/imgs/profile-card-bg.png')}
            />

            {/* Avatar / Level */}
            <View style={styles.avatarContainer}>
                {/* Circle Level Stroke */}
                <View style={styles.avatar}>
                    {/* Avatar Icon */}
                    <Image
                        style = {styles.avatarIcon}
                        resizeMode = "contain"
                        source = {require('../../assets/imgs/can-avatar.png')}
                    />

                    {/* Level Badge */}
                    <View style={styles.levelContainer}>
                        <Image
                            style = {styles.levelBadge}
                            source = {require('../../assets/imgs/level-badge.png')}
                        />

                        {/* Level # */}
                        <Text style={styles.levelText}>1</Text>
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