import React, { Component } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import LoginComp from '../components/Login.js';
import SafeAreaView from 'react-native-safe-area-view';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state={
            userFriends: [],
            currentUserName: "",
            currentUserLikes: [],
        }

    }
    static navigationOptions = {
      header: null,
    };

    
    retrieveDataFromLoginChild(data){
        console.warn('retrieved data:', data);
        this.setState({userFriends: data.friends});
        console.warn('friends:', this.state.userFriends);
        this.setState({currentUserName: data.name});
        this.setState({currentUserLikes: data.likes.data})
    }

    render() {
      const {navigate} = this.props.navigation;

      const Friends = this.state.userFriends.map(friend =>
         <Text>{friend}</Text>
      );

      return (
        <SafeAreaView style={HomeStyles.container}>
            <LoginComp onRef={ref => (this.parentReference = ref)} parentReference={this.retrieveDataFromLoginChild.bind(this)}/>
            <Text>{this.state.currentUserName}</Text>
            {Friends}
            <Button title="See friends" onPress={() => navigate('Friends', {name: 'Jane'})}/>
        </SafeAreaView>
      );
    }

}

const HomeStyles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#925dc5'

    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

