import React, { Component } from 'react';

import { SafeAreaView, View, Text, Button } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <LoginButton
                  onLoginFinished={
                  (error, result) => {
                      if (error) {
                          console.log("login has error: " + result.error);
                      } else if (result.isCancelled) {
                          console.log("login is cancelled.");
                      } else {
                          AccessToken.getCurrentAccessToken().then(
                              (data) => {
                                  console.log(data.accessToken.toString())
                              }
                          )
                      }
                  }
              }
                  onLogoutFinished={() => console.log("logout.")}/>

            <Button title="See friends" onPress={() => navigate('Friends', {name: 'Jane'})}/>
        </View>
    
      );
    }
  }

