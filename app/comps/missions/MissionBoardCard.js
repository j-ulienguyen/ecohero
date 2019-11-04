import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../../styles/MissionBoardCardStyles';
import MotivationCard from './MotivationCard';


export default function MissionBoardCard(){
    // UI
    return (
        <View style={styles.container}>
            {/* Blue BG Card */}
            <Image
            style = {styles.bgCard}
            source = {require('../../assets/imgs/mission-card-bg.png')}
            />

            {/* Mission Board Heading */}
            <Text style={styles.mainHeading}>Mission Board</Text>

            {/* Mission Statement Subheading */}
            <Text style={styles.missionStatement}>“Our mission is to recycle and maintain a clean environment”</Text>

            {/* Motivation Card */}
            <View style={styles.cardContainer}>
                <MotivationCard/>
            </View>

            {/* Filters */}
            <View style={styles.filterContainer}>
                {/* Available Text Button */}
                <TouchableOpacity
                    style={styles.filterBtn}
                >
                    <Text style={[styles.filterBtnText, styles.filterBtnActive]}>Available</Text>
                </TouchableOpacity>

                {/* In Progress Text Button */}
                <TouchableOpacity
                    style={styles.filterBtn}
                >
                    <Text style={styles.filterBtnText}>In Progress</Text>
                </TouchableOpacity>

                {/* Completed Text Button */}
                <TouchableOpacity
                    style={styles.filterBtn}
                >
                    <Text style={styles.filterBtnText}>Completed</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}