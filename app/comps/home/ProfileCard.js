import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/ProfileCardStyles';
import UserBubble from './UserBubble';
import HexBadge from './HexBadge';
import AvatarLevel from '../AvatarLevel';
import UsernameLabel from '../UsernameLabel';


export default function ProfileCard({type, avatarPath, level, username, missionAvailable, starCount, missionCount}){

    var userBubble;
    var badges;

    if(type === "compact"){
        userBubble = null,
        badges = (
            <View style={styles.badgesContainer}>
                {/* Avatar Level Badge */}
                <AvatarLevel
                    avatarPath={avatarPath}
                    level={level}
                />
            </View>
        )
    }

    if(type === "full"){
        userBubble = (
            <View style={styles.userBubbleContainer}>
                <UserBubble username={username} missionAvailable={missionAvailable}/>
            </View>
        ),
        badges = (
            <View style={styles.badgesContainer}>
                {/* Star Count Badge */}
                <HexBadge
                    type="image"
                    count={starCount} // Star Count #
                    badgePath={require('../../assets/imgs/star-icon.png')}
                />

                {/* Avatar Level Badge */}
                <AvatarLevel
                    avatarPath={avatarPath}
                    level={level} // Current Level
                />

                {/* Mission Count Badge */}
                <HexBadge
                    type="text"
                    count={missionCount} // Missions Available Count #
                    label="Missions"
                />
            </View>
        )
    }

    // UI
    return (
        <View style={styles.container}>
            {/* Green BG Card */}
            <Image source={require('../../assets/imgs/profile-card-bg.png')}/>

            {userBubble}
            {badges}

            {/* Username */}
            <UsernameLabel username={username}/>
        </View>
    )
}