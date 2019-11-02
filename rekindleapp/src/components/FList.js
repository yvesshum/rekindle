import React, { Component } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Image } from 'react-native';

export default class FList extends Component {

    render() {
      return (
          <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
            <View style={styles.image}>
              <Image
              style={{width: 75, height: 75}}
              source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
              />
            </View>

            <View style={styles.details}>
              <Text style={styles.name}>{this.props.name}</Text>
            </View>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    image: {
      marginRight: 10,
      borderRadius: 100,
      overflow: 'hidden'
    },
    details: {
      margin: 10
    },
    name: {
      fontSize: 20
    }
  });