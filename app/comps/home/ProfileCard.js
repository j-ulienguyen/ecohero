import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/ProfileCardStyles';
import UserBubble from './UserBubble';
import HexBadge from './HexBadge';
import AvatarLevel from '../AvatarLevel';
import UsernameLabel from '../UsernameLabel';

// Navigation
import * as navigateTo from '../../../RouteConstants';


export default function ProfileCard({type, avatarPath, level, username, missionAvailable, starCount, missionCount, progressCircle}){

    var userBubble;
    var badges;

    if(type === "compact"){
        userBubble = null,
        badges = (
            <View style={[styles.badgesContainer, {marginTop: 10}]}>
                {/* Avatar Level Badge */}
                <AvatarLevel
                    avatarPath={avatarPath}
                    level={level}
                    disabled={true}
                    progressCircle={progressCircle}
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
                    onPress={navigateTo.Leaderboard}
                />

                {/* Avatar Level Badge */}
                <AvatarLevel
                    avatarPath={avatarPath}
                    level={level} // Current Level
                    onPress={navigateTo.Profile}
                    progressCircle={progressCircle}
                />

                {/* Mission Count Badge */}
                <HexBadge
                    type="text"
                    count={missionCount} // Missions Available Count #
                    label="Missions"
                    onPress={()=>{
                        navigateTo.Missions({
                            activeTab: "Completed"
                        })
                    }}
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