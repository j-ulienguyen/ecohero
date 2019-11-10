import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionBoardCardStyles';


export default function FilterTabMenu({tab1, tab2, tab3}){

    function FilterButton({activeFilter, title}){
        return (
            <TouchableOpacity>
                <Text style={[styles.filterBtnText, activeFilter]}>{title}</Text>
            </TouchableOpacity>
        )
    }

    // UI
    return (
        <View style={styles.filterContainer}>
            <FilterButton title={tab1} activeFilter={styles.filterBtnActive}/>
            <FilterButton title={tab2} activeFilter={null}/>
            <FilterButton title={tab3} activeFilter={null}/>
        </View>
    )
}