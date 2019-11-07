import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';


// Import Screens comps
import HomeScreen from '../../app/screens/HomeScreen';
import MissionsScreen from '../../app/screens/MissionsScreen';
import LeaderboardScreen from '../../app/screens/LeaderboardScreen';
import ProfileScreen from '../../app/screens/ProfileScreen';

// Import Subscreens comps
// import BasicProfile from '../../app/subscreens/BasicProfile';
// import ChooseAvatar from '../../app/subscreens/ChooseAvatar';
import ForgotPWSubscreen from '../../app/subscreens/ForgotPWSubscreen';

// Import General comps
import AvatarLevel from '../../app/comps/AvatarLevel';
import BackBar from '../../app/comps/BackBar';
import EcoHeroLogo from '../../app/comps/EcoHeroLogo';
import FilterTabMenu from '../../app/comps/FilterTabMenu';
import GreenButton from '../../app/comps/GreenButton';
import PatternBG from '../../app/comps/PatternBG';
import RewardModal from '../../app/comps/RewardModal';
import ScreenOverlay from '../../app/comps/ScreenOverlay';
import SignInEntry from '../../app/comps/SignInEntry';
import SignUpEntry from '../../app/comps/SignUpEntry';
import StarCount from '../../app/comps/StarCount';
import StepProgressBar from '../../app/comps/StepProgressBar';
import TreeBg from '../../app/comps/TreeBg';
import UsernameLabel from '../../app/comps/UsernameLabel';

// Import Home comps
import ProfileCard from '../../app/comps/home/ProfileCard';
import UserBubble from '../../app/comps/home/UserBubble';
import HexBadge from '../../app/comps/home/HexBadge';
import PrizeCard from '../../app/comps/home/PrizeCard';
import PrizeProgress from '../../app/comps/home/PrizeProgress';
import LevelUpModal from '../../app/comps/home/LevelUpModal';

// Import Missions comps
import MissionBoardCard from '../../app/comps/missions/MissionBoardCard';
import MissionCard from '../../app/comps/missions/MissionCard';
import MotivationCard from '../../app/comps/missions/MotivationCard';
import RewardsBar from '../../app/comps/missions/RewardsBar';

// Import Leaderboard comps


// Import Profile comps
import SettingsIcon from '../../app/comps/profile/SettingsIcon';
import AchievementCard from '../../app/comps/profile/AchievementCard';
import ProfileBadge from '../../app/comps/profile/ProfileBadge';
import BadgeModal from '../../app/comps/profile/BadgeModal';


// Screens
storiesOf('Screens', module)
  .add('Home Screen', () => <HomeScreen/>)
  .add('Missions Screen', () => <MissionsScreen/>)
  .add('Leaderboard Screen', () => <LeaderboardScreen/>)
  .add('Profile Screen', () => <ProfileScreen/>)


// Subscreens
storiesOf('Subscreens', module)
  .add('Comp Name', () => <GreenButton/>)
  .add('Comp Name', () => <GreenButton/>)
  .add('Comp Name', () => <GreenButton/>)


// General Components
storiesOf('General', module)
  .add('Avatar Level', () => <AvatarLevel/>)
  .add('Back Bar', () => <BackBar/>)
  .add('EcoHero Logo', () => <EcoHeroLogo/>)
  .add('Filter Tab Menu', () => <FilterTabMenu/>)
  .add('Green Button', () => <GreenButton/>)
  .add('Pattern BG', () => <PatternBG/>)
  .add('Reward Modal', () => <RewardModal/>)
  .add('Screen Overlay', () => <ScreenOverlay/>)
  .add('Sign In Entry', () => <SignInEntry/>)
  .add('Sign Up Entry', () => <SignUpEntry/>)
  .add('Star Count', () => <StarCount/>)
  .add('Step Progress Bar', () => <StepProgressBar/>)
  .add('Tree BG', () => <TreeBg/>)
  .add('Username Label', () => <UsernameLabel/>)


// Home Components
storiesOf('Home', module)
  .add('Profile Card', () => <ProfileCard/>)
  .add('User Bubble', () => <GreenBUserBubbleutton/>)
  .add('Hex Badge', () => <HexBadge/>)
  .add('Prize Card', () => <PrizeCard/>)
  .add('Prize Progress', () => <PrizeProgress/>)
  .add('Level Up Modal', () => <LevelUpModal/>)


// Mission Components
storiesOf('Mission', module)
  .add('Mission Board Card', () => <MissionBoardCard/>)
  .add('Mission Card', () => <MissionCard/>)
  .add('Motivation Card', () => <MotivationCard/>)
  .add('Rewards Bar', () => <RewardsBar/>)


// Leaderboard Components
storiesOf('Leaderboard', module)
  .add('CompName', () => <GreenButton/>)


// Profile Components
storiesOf('Profile', module)
  .add('Settings Icon', () => <SettingsIcon/>)
  .add('Achievement Card', () => <AchievementCard/>)
  .add('Profile Badge', () => <ProfileBadge/>)
  .add('Badge Modal', () => <BadgeModal/>)
