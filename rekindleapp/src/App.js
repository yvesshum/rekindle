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
import Walkthrough from './pages/Walkthrough'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Friends: {screen: Friends},
  Walkthrough: {screen: Walkthrough}
});

const App = createAppContainer(MainNavigator);

export default App;
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
         
//           <View style={styles.body}>
            
//                   <LoginButton
//                   onLoginFinished={
//                   (error, result) => {
//                       if (error) {
//                           console.log("login has error: " + result.error);
//                       } else if (result.isCancelled) {
//                           console.log("login is cancelled.");
//                       } else {
//                           AccessToken.getCurrentAccessToken().then(
//                               (data) => {
//                                   console.log(data.accessToken.toString())
//                               }
//                           )
//                       }
//                   }
//               }
//                   onLogoutFinished={() => console.log("logout.")}/>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

