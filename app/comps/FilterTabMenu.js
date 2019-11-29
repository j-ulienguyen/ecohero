import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionBoardCardStyles';


export default function FilterTabMenu({tab1, tab2, tab3, setActiveTab}){

    const [toggleTab1, setToggleTab1] = useState(true);     // Initial Tab
    const [toggleTab2, setToggleTab2] = useState(false);
    const [toggleTab3, setToggleTab3] = useState(false);

    // Init vars - Default tabs are not active
    var activeFilter1 = null,
        activeFilter2 = null,
        activeFilter3 = null;


    if(toggleTab1 === true){
        activeFilter1 = styles.filterBtnActive
    }

    if(toggleTab2 === true){
        activeFilter2 = styles.filterBtnActive
    }

    if(toggleTab3 === true){
        activeFilter3 = styles.filterBtnActive
    }


    function AllFalse(){
        setToggleTab1(false);
        setToggleTab2(false);
        setToggleTab3(false);
    }


    // UI
    return (
        <View style={styles.filterContainer}>
            {/* Tab 1 */}
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=>{
                    AllFalse();
                    setToggleTab1(true)
                    setActiveTab(tab1)
                }}
            >
                <Text style={[styles.filterBtnText, activeFilter1]}>{tab1}</Text>
            </TouchableOpacity>

            {/* Tab 2 */}
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=>{
                    AllFalse();
                    setToggleTab2(true)
                    setActiveTab(tab2)
                }}
            >
                <Text style={[styles.filterBtnText, activeFilter2]}>{tab2}</Text>
            </TouchableOpacity>

            {/* Tab 3 */}
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=>{
                    AllFalse();
                    setToggleTab3(true)
                    setActiveTab(tab3)
                }}
            >
                <Text style={[styles.filterBtnText, activeFilter3]}>{tab3}</Text>
            </TouchableOpacity>
        </View>
    )
}