import React, { Component } from 'react';
import FList from '../components/FList';  
import { SafeAreaView, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Friends extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };

    render() {
      flists = [{
        id: "f1",
        name: "Joe"
      },
      {
        id: "f2",
        name: "Yena"
      },
      {
        id: "f3",
        name: "Yves"  
      },
      {
        id: "f4",
        name: "Jiaqi"
      }]

      return (
        <SafeAreaView>
            <ScrollView>
              <Text>Hi friends!</Text>
              
              {flists.map((friend) => {
                return (<FList key={friend.id} name={friend.name}></FList>
              )})}
            </ScrollView>
        </SafeAreaView>
      );
    }
  }