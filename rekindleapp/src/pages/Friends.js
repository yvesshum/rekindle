import React, { Component } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

class Friends extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      return (
        <SafeAreaView>
            <View>
                <Text>Hi friends!</Text>
            </View>
        </SafeAreaView>
      );
    }
  }

export default Friends;
