import React, { Component } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'

export default class FList extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalVisible: false,

        }
        this.handleFriendSettings = this.handleFriendSettings.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this)
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    handleFriendSettings() {
        this.setModalVisible(true)
    }

    handleSend() {
      const { navigate } = this.props.navigation;

      navigate('Messages', {blank:"True", friendName: this.props.id});
    }

    render() {
    let modalContent =
        <View style={{  backgroundColor: '#FFFFFF', height: 200, width:370, alignSelf: 'center', borderRadius: 20, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 17}}>User Settings</Text>
            <Text style={{textAlign: 'center', marginTop: 5, lineHeight: 20,}}>Change various settings here!</Text>
            <View style={{backgroundColor: '#925dc5', borderRadius:40, height:57, width:278,  justifyContent:'center', marginTop: 30}}>
                <Button color='#FFFFFF' title={'SAVE'} onPress={() => this.continueToMain()}/>
            </View>

        </View>

      return (
          <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
              <Modal isVisible={this.state.modalVisible} onBackdropPress={() => this.setModalVisible(false)}>
                  {modalContent}
              </Modal>

              <TouchableOpacity style={{flex: 9, flexDirection: 'row'}} onPress={() => this.handleFriendSettings()}>
                  <View style={styles.image}>
                      <Image
                          style={{width: 75, height: 75}}
                          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                      />
                  </View>

                  <View style={styles.details}>
                      <Text style={styles.name}>{this.props.name}</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flex: 1}} onPress={() => this.handleSend()}>
                  <Image source={require('../../assets/icon.jpg')} style={{width: 40, height: 40}}/>
              </TouchableOpacity>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    image: {
      marginRight: 22,
      borderRadius: 100,
      overflow: 'hidden'
    },
    details: {
      justifyContent: 'center'
    },
    name: {
      fontSize: 20
    }
  });