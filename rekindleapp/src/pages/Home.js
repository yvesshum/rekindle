import React, { Component } from 'react';

import { SafeAreaView, View, Text, Button } from 'react-native';
import LoginComp from '../components/Login.js';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state={
            userFriends: [],
            currentUserName: "",
        }

    }
    static navigationOptions = {
      title: 'Welcome',
    };

    
    retrieveDataFromLoginChild(data){
        console.warn('retrieved data:', data);
        this.setState({userFriends: data.friends})
        console.warn('friends:', this.state.userFriends)
        this.setState({currentUserName: data.name})
    }

    render() {
      const {navigate} = this.props.navigation;

      const Friends = this.state.userFriends.map(friend =>
         <Text>{friend}</Text>
      );

      return (
        <View>
            <LoginComp onRef={ref => (this.parentReference = ref)} parentReference={this.retrieveDataFromLoginChild.bind(this)}/>
            <Text>{this.state.currentUserName}</Text>
            {Friends}
        </View>
    
      );
    }
  }

