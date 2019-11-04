import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionBoardCardStyles';


export default function FilterTabMenu(props){

    function FilterButton(props){
        return (
            <TouchableOpacity>
                <Text style={[styles.filterBtnText, props.activeFilter]}>{props.title}</Text>
            </TouchableOpacity>
        )
    }

    // UI
    return (
        <View style={styles.filterContainer}>
            <FilterButton title={props.tab1} activeFilter={styles.filterBtnActive}/>
            <FilterButton title={props.tab2} activeFilter={null}/>
            <FilterButton title={props.tab3} activeFilter={null}/>
        </View>
    )
}