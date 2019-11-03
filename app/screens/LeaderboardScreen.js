import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import PatternBG from '../comps/PatternBG'
import LeaderBoardCard from '../comps/leaderboard/LeaderBoardCard'

// Import comps below



export default function LeaderBoardScreen(){
    // UI
    return (
        <View>
            {/* Fixed Pattern BG */}
            <PatternBG />
            {/* Scrollable Content */}
            <ScrollView>
                <View>
                    {/* Leaderboard Header Card */}
                    <LeaderBoardCard />
                    
                </View>



            </ScrollView>
            
        </View>
    )
}