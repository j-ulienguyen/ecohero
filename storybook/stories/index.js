import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';


// Import Screens comps
import HomeScreen from '../../app/screens/HomeScreen';
import MissionsScreen from '../../app/screens/MissionsScreen';
import LeaderboardScreen from '../../app/screens/LeaderboardScreen';
import ProfileScreen from '../../app/screens/ProfileScreen';

// Import Subscreens comps
import OnboardSteps from '../../app/subscreens/OnboardSteps';
import BasicProfile from '../../app/subscreens/BasicProfileSubscreen';
import ChooseAvatar from '../../app/subscreens/ChooseAvatarSubscreen';
import ForgotPW from '../../app/subscreens/ForgotPWSubscreen';
import Code from '../../app/subscreens/Verification_4Digit';
import QRCode from '../../app/subscreens/Verification_QR';


// Import General comps
import AvatarLevel from '../../app/comps/AvatarLevel';
import BackBar from '../../app/comps/BackBar';
import EcoHeroLogo from '../../app/comps/EcoHeroLogo';
import FilterTabMenu from '../../app/comps/FilterTabMenu';
import GreenButton from '../../app/comps/GreenButton';
import PatternBG from '../../app/comps/PatternBG';
import RewardModal from '../../app/comps/RewardModal';
import ScreenOverlay from '../../app/comps/ScreenOverlay';
import StarCount from '../../app/comps/StarCount';
import TreeBg from '../../app/comps/TreeBg';
import UsernameLabel from '../../app/comps/UsernameLabel';


// Import Signin / Signup / Onboard
import SignInEntry from '../../app/comps/signin/SignInEntry';
import SignUpEntry from '../../app/comps/signup/SignUpEntry';
import StepProgressBar from '../../app/comps/signup/StepProgressBar';
import GetStarted from '../../app/comps/onboard/GetStarted';


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
import LeaderboardCard from '../../app/comps/leaderboard/LeaderboardCard';
import FriendsCard from '../../app/comps/leaderboard/FriendsCard';
import LeaderboardUser from '../../app/comps/leaderboard/LeaderboardUser';


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
  .add('Onboarding Subscreen', () => <OnboardSteps/>)
  .add('Basic Profile Subscreen', () => <BasicProfile/>)
  .add('Forgot Password Subscreen', () => <ForgotPW/>)
  .add('Choose Avatar Subscreen', () => <ChooseAvatar/>)
  .add('Verification QR', () => <QRCode/>)
  .add('Verification 4Digit', () => <Code/>)


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
  .add('Star Count', () => <StarCount/>)
  .add('Tree BG', () => <TreeBg/>)
  .add('Username Label', () => <UsernameLabel/>)


// Signin / Signup / Onboard
storiesOf('Sign / Onboard', module)
  .add('Sign In Entry', () => <SignInEntry/>)
  .add('Sign Up Entry', () => <SignUpEntry/>)
  .add('Step Progress Bar', () => <StepProgressBar/>)
  .add('Get Started', () => <GetStarted/>)


// Home Components
storiesOf('Home', module)
  .add('Profile Card', () => <ProfileCard/>)
  .add('User Bubble', () => <UserBubble/>)
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
  .add('Leaderboard Card', () => <LeaderboardCard/>)
  .add('Leaderboard Friends Card', () => <FriendsCard/>)
  .add('Leaderboard User Card', () => <LeaderboardUser/>)


// Profile Components
storiesOf('Profile', module)
  .add('Settings Icon', () => <SettingsIcon/>)
  .add('Achievement Card', () => <AchievementCard/>)
  .add('Profile Badge', () => <ProfileBadge/>)
  .add('Badge Modal', () => <BadgeModal/>)
