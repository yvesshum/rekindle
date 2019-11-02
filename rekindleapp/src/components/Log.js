import React, { Component } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Log extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalVisible: false,
            active: this.props.active
        }
    }

    getUserData(id) {
        //since we don't have a database here we go!
        switch (id) {
            case '2684866978225110':
                return require('../../assets/userData/2684866978225110.json');
            case '2559221700767822':
                return require('../../assets/userData/2559221700767822.json');
            default:
                return require('../../assets/userData/2559221700767822.json')
        }
    }

    render() {
        console.warn(this.props.url);
      return (
          <View style={{flexDirection: 'row', margin: 20, alignItems: 'center', opacity: this.state.active}}>
              <TouchableOpacity style={{flex: 9, flexDirection: 'row'}} >
                  <View style={styles.image}>
                      <Image
                          style={{width: 60, height: 60}}
                          source={require('../../assets/userData/yves.png')}
                      />
                  </View>

                  <View style={styles.details}>
                      <Text style={styles.name}>{this.props.from}</Text>
                      <Text style={styles.date}>{this.props.msg}</Text>
                      <Text style={styles.date}>{this.props.date}</Text>
                  </View>
              </TouchableOpacity>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    image: {
      marginRight: 15,
      borderRadius: 100,
      overflow: 'hidden'
    },
    details: {
      justifyContent: 'center',
      width: 300
    },
    name: {
      fontSize: 15
    },
    date: {
        color: "grey",
        fontSize: 10
    }
  });