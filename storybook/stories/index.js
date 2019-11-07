import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import GreenButton from '../../app/comps/GreenButton';
import LeaderboardCard from '../../app/comps/leaderboard/LeaderboardCard';
import LeaderboardFriends from '../../app/comps/leaderboard/LeaderboardFriends';
import LeaderboardScreen from '../../app/screens/LeaderboardScreen';


storiesOf('Button', module)
  .add('Green Button', () => <GreenButton/>)
  .add('Blue Button', () => <GreenButton/>)


  storiesOf('Leaderboard', module)
  .add('Leaderboard Card', () => <LeaderboardCard/>)
  .add('Leaderboard Friends', () => <LeaderboardFriends/>)
  .add('Leaderboard Screen', () => <LeaderboardScreen/>)
