/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { LoginButton, AccessToken } from 'react-native-fbsdk';
import HomeScreen from './pages/Home';
import Friends from './pages/Friends';
import Messages from './pages/Messages';



const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Friends: {screen: Friends},
  Messages: {screen: Messages}
});

const App = createAppContainer(MainNavigator);

export default App;