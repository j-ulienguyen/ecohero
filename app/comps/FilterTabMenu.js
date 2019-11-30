import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Import comps & styles below
import styles from '../styles/MissionBoardCardStyles';


export default function FilterTabMenu({tab1, tab2, tab3, setActiveTab, statusTab1, statusTab2, statusTab3}){

    // Status of tab will be defined through prop statusTab1
    var defaultTab1 = statusTab1;
    var defaultTab2 = statusTab2;
    var defaultTab3 = statusTab3;

    const [toggleTab1, setToggleTab1] = useState(defaultTab1);
    const [toggleTab2, setToggleTab2] = useState(defaultTab2);
    const [toggleTab3, setToggleTab3] = useState(defaultTab3);

    // Init vars - Default tabs are not active
    var activeFilter1 = null,
        activeFilter2 = null,
        activeFilter3 = null;

    // Set active styling for selected tab
    if(toggleTab1 === true){
        activeFilter1 = styles.filterBtnActive
    }

    if(toggleTab2 === true){
        activeFilter2 = styles.filterBtnActive
    }

    if(toggleTab3 === true){
        activeFilter3 = styles.filterBtnActive
    }

    // Set value as false for everything
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