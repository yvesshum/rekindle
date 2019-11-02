import React, { Component } from 'react';
import { SafeAreaView, View, Text, Button, Image } from 'react-native';

export default class FList extends Component {

    render() {
      return (
          <View>
            <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            />
            <Text>{this.props.name}</Text>
          </View>
            
        
      );
    }
  }