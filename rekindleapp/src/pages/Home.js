import React, { Component } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <SafeAreaView>
            <View>
            <Button onPress={() => navigate('Friends')} title="Friends"/>

            </View>
        </SafeAreaView>
      );
    }
  }

