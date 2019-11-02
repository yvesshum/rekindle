import React, { Component } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'

export default class FList extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalVisible: false,
            active: this.props.active
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

    activate(signal) {
      if (signal == "YES"){
        this.setState({
          active: 1,
          modalVisible: false
        })
      }else{
        this.setState({
          active: 0.3,
          modalVisible: false
        })
      }


      
    }

    render() {
    let modalContent = this.state.active == 0.3 ?
        <View style={{  backgroundColor: '#FFFFFF', height: 200, width:370, alignSelf: 'center', borderRadius: 20, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 17}}>Would you like to receive messages</Text>
            <Text style={{fontWeight: 'bold', marginTop: 5, fontSize: 17}}>from this friend?</Text>

            <Text style={{textAlign: 'center', marginTop: 10, fontSize: 15, lineHeight: 20, margin: 10}}>You will only receive messages if both you and your friend are interested in catching up.</Text>
            <View style={{backgroundColor: '#925dc5', borderRadius:40, height:52, width:278,  justifyContent:'center', marginTop: 7}}>
                <Button color='#FFFFFF' title={'Start Receiving'} onPress={() => this.activate("YES")}/>
            </View>

        </View> :
        <View style={{  backgroundColor: '#FFFFFF', height: 200, width:370, alignSelf: 'center', borderRadius: 20, alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 17}}>STOP receiving messages</Text>
        <Text style={{fontWeight: 'bold', marginTop: 5, fontSize: 17}}>from this friend?</Text>

        <Text style={{textAlign: 'center', marginTop: 10, fontSize: 15, lineHeight: 20, margin: 10}}>You will only receive messages if both you and your friend are interested in catching up.</Text>
        <View style={{backgroundColor: '#925dc5', borderRadius:40, height:52, width:278,  justifyContent:'center', marginTop: 7}}>
            <Button color='#FFFFFF' title={'Stop Receiving'} onPress={() => this.activate("STOP")}/>
        </View>

      </View>


      return (
          <View style={{flexDirection: 'row', margin: 20, alignItems: 'center', opacity: this.state.active}}>
              <Modal isVisible={this.state.modalVisible} onBackdropPress={() => this.setModalVisible(false)}>
                  {modalContent}
              </Modal>

              <TouchableOpacity style={{flex: 9, flexDirection: 'row'}} onPress={() => this.handleFriendSettings()}>
                  <View style={styles.image}>
                      <Image
                          style={{width: 75, height: 75}}
                          source={require('../../assets/userData/yves.png')}
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