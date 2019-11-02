//Logs a user in and sends back the corresponding data

import React, { Component } from 'react';

import {  View, Image, Text} from 'react-native';

export default class Walkthrough extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state={

        };


    }


    render() {
        return (
            <View style={{flex: 1, borderBottomWidth: 1}}>
                <Image source={require('../../assets/walkthrough/w1.jpg')} style={{width: 400, height:700, position:'absolute', marginTop: 40, marginLeft: 5}}/>
            
            </View>
        );
    }
}

