import React from 'react';
import {View, Text, Image} from 'react-native';

// Import comps & styles below
import styles from '../../styles/MissionBoardCardStyles';
import MotivationCard from './MotivationCard';
import FilterTabMenu from '../FilterTabMenu';


export default function MissionBoardCard({missionStatement}){
    // UI
    return (
        <View style={styles.container}>
            {/* Blue BG Card */}
            <Image source={require('../../assets/imgs/mission-card-bg.png')}/>

            {/* Mission Board Heading */}
            <Text style={styles.mainHeading}>Mission Board</Text>

            {/* Mission Statement Subheading */}
            <Text style={styles.missionStatement}>{missionStatement}</Text>

            {/* Motivation Card */}
            <View style={styles.cardContainer}>
                <MotivationCard/>
            </View>

            {/* Filter Tab Menu */}
            <FilterTabMenu
                tab1 = "Available"
                tab2 = "In Progress"
                tab3 = "Completed"
            />
        </View>
    )
}