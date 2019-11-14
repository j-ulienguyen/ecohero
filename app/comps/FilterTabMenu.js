import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionBoardCardStyles';


export default function FilterTabMenu({tab1, tab2, tab3}){

    const [toggleTab1, setToggleTab1] = useState(true);
    const [toggleTab2, setToggleTab2] = useState(false);
    const [toggleTab3, setToggleTab3] = useState(false);

    if(toggleTab1 === true){
        activeFilter = styles.filterBtnActive

        setToggleTab2(!toggleTab2);
        setToggleTab3(!toggleTab3);
    }

    if(toggleTab2 === true){
        setToggleTab1(!toggleTab1);
        setToggleTab3(!toggleTab3);
    }

    if(toggleTab3 === true){
        setToggleTab1(!toggleTab1);
        setToggleTab2(!toggleTab2);
    }


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
            <FilterButton
                title={tab1}
                activeFilter={styles.filterBtnActive}
                //onPress={()=>{
                  //  setToggleTab1(!toggleTab1);
                //}}
            />
            <FilterButton title={tab2} activeFilter={null}/>
            <FilterButton title={tab3} activeFilter={null}/>
        </View>
    )
}