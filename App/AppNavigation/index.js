/* @flow */

import React from 'react';
import { Animated, Easing } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import DrawerContainer from './DrawerContainer';
import MenuButton from './MenuButton';
import ConnectScreen from '../Scene/Connect/ConnectScreen';
import LoginScreen from '../Scene/Connect/LoginScreen';
import SignupScreen from '../Scene/Connect/SignupScreen';
import ForgottenPasswordScreen from '../Scene/Connect/ForgottenPasswordScreen';
import Dashboard from '../Scene/Dashboard/Dashboard';
import CarDetails from '../Scene/CarDetails';
import CarService from '../Scene/CarService';
import About from '../Scene/About';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

// drawer stack
const DrawerStack = DrawerNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: { headerTitle: 'Home' }
  },
  CarDetails: {
    screen: CarDetails,
    navigationOptions: { headerTitle: 'Your car' }
  },
  CarService: {
    screen: CarService,
    navigationOptions: { headerTitle: 'Car service'}
  },
  About: {
    screen: About,
    navigationOptions: { headerTitle: 'About'}
  },
},
{
  contentComponent: DrawerContainer,
  navigationOptions: ({ navigation }) => ({
    gesturesEnabled: false
  })
});

// const func = (navigation) => {
//   console.log(navigation)
// };

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  navigationOptions: ({navigation}) => ({
    // headerTitle: navigation.state.routes[0].routes[navigation.state.routes[0].index].routeName,
    headerStyle: {backgroundColor: '#E6E6E6'},
    gesturesEnabled: false,
    headerLeft: <MenuButton onPress={() => navigation.navigate('DrawerToggle')} />
  })
});

// connect stack
const ConnectStack = StackNavigator({
  connectScreen: {
    screen: ConnectScreen,
    navigationOptions: { title: 'Connect your car' }
  },
  loginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Connect your car' }
  },
  signupScreen: {
    screen: SignupScreen,
    navigationOptions: { title: 'Personal details' }
  },
  forgottenPasswordScreen: {
    screen: ForgottenPasswordScreen,
    navigationOptions: { title: 'Request new password' }
  }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E6E6E6'}
  }
});

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  loginStack: {
    screen: ConnectStack
  },
  drawerStack: {
    screen: DrawerNavigation
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig
});

export default PrimaryNav;
