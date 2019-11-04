import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/ProfileCardMinStyles';
import UsernameLabel from '../UsernameLabel';


export default function ProfileCardMin(props){
    // UI
    return (
        <View style={styles.container}>
            {/* Green BG Card */}
            <Image source = {require('../../assets/imgs/profile-card-bg.png')}/>

            {/* Avatar / Level */}
            <View style={styles.avatarContainer}>
                {/* Circle Level Stroke */}
                <View style={styles.avatar}>
                    {/* Avatar Icon */}
                    <Image
                        style = {styles.avatarIcon}
                        resizeMode = "contain"
                        source = {props.avatarPath}
                    />

                    {/* Level Badge */}
                    <View style={styles.levelContainer}>
                        <Image
                            style = {styles.levelBadge}
                            source = {require('../../assets/imgs/level-badge.png')}
                        />

                        {/* Level # */}
                        <Text style={styles.levelText}>{props.level}</Text>
                    </View>
                </View>
            </View>

            {/* Username */}
            {/* <View style={styles.usernameContainer}>
                <Text style={styles.usernameText}>{props.username}</Text>
            </View> */}
            <UsernameLabel/>
        </View>
    )
}