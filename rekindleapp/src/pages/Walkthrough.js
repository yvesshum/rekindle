//Logs a user in and sends back the corresponding data

import React, { Component } from 'react';

import {  View, Image, Text, Button, TouchableOpacity, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal'
export default class Walkthrough extends Component {

    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);
        this.state={
            pageIndex: 0,
            modalVisible: false,
            modalNum: 0
        };
        this.setModalVisible = this.setModalVisible.bind(this);
        this.continueToMain = this.continueToMain.bind(this);

        const { navigation } = this.props;

        let friendsList = navigation.getParam('friendsList');
        console.warn(this.friendsList);

    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    increment() {
        let prev = this.state.pageIndex;
        if (prev < 2){
            this.setState({pageIndex: prev + 1})
        }

    }
    decrement() {
        let prev = this.state.pageIndex;
        if (prev > 0){
            this.setState({pageIndex: prev - 1})
        }

    }

    prevIsDisabled() {
        if (this.state.pageIndex == 0) return true;
    }


    continueToMain() {
        this.props.navigation.navigate('Friends', {friendsList: this.props.friendsList, userName: this.props.userName});
        this.setModalVisible(false);
    }   



    render() {
        let page;

        if (this.state.pageIndex === 0) {
            page = <Image source={require('../../assets/walkthrough/w1.jpg')} style={{width: 400, height:700, marginTop: 40, marginLeft: 5}}/>
        }
        else if (this.state.pageIndex === 1) {
            page = <Image source ={require('../../assets/walkthrough/w2.jpg')} style={{width: 400, height:700, marginTop: 40, marginLeft: 5}}/>;
        }
        else {
            page =<Image source ={require('../../assets/walkthrough/w3.jpg')}  style={{width: 400, height:700, marginTop: 40, marginLeft: 5}}/>;
        }

        let navbutton;

        if (this.state.pageIndex !== 2) {
            navbutton =
                <View style={{flexDirection: 'row', width:'100%', justifyContent:'space-evenly'}}>
                    <Button title={'previous'} onPress={()=>this.decrement()} disabled={this.prevIsDisabled()}/>
                    <Button title={'next'} onPress={()=>this.increment()}/>
                </View>
        }
        else {
            navbutton =
                <View style={{backgroundColor: '#925dc5', borderRadius: 30, width:'70%', height: 50, justifyContent:'center', marginTop: 20}}>
                    <Button title={'START CATCHING UP!'} color={'#FFFFFF'} onPress={() => this.setModalVisible(true)} />
                </View>
        }

        let modalContent;

        if (this.state.modalNum === 0) {
            modalContent =
                <View style={{  backgroundColor: '#FFFFFF', height: 236, width:370, alignSelf: 'center', borderRadius: 20, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 17}}>CatchUp! needs to access your Friend List</Text>
                    <Text style={{textAlign: 'center', marginTop: 5, lineHeight: 20,}}>The app will help you reconnect with old friends by accessing your list of friends on Facebook</Text>
                    <View style={{backgroundColor: '#925dc5', borderRadius:40, height:57, width:278,  justifyContent:'center', marginTop: 30}}>
                        <Button color='#FFFFFF' title={'GIVE ACCESS'} onPress={() => this.setState({modalNum: 1})}/>
                    </View>

                    <Button color='#925dc5' title={'skip'} onPress={() => this.setState({modalNum: 1})}/>
                </View>
        }
        else if (this.state.modalNum === 1) {
            modalContent =
                <View style={{  backgroundColor: '#FFFFFF', height: 236, width:370, alignSelf: 'center', borderRadius: 20, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 17}}>CatchUp! needs to access your location</Text>
                    <Text style={{textAlign: 'center', marginTop: 5, lineHeight: 20,}}>Your current location will be used for helping friends see where you are around the world.</Text>
                    <View style={{backgroundColor: '#925dc5', borderRadius:40, height:57, width:278,  justifyContent:'center', marginTop: 30}}>
                        <Button color='#FFFFFF' title={'SHARE LOCATION'} onPress={() => this.setState({modalNum: 2})}/>
                    </View>

                    <Button color='#925dc5' title={'skip'} onPress={() => this.setState({modalNum: 2})}/>
                </View>
        }

        else if (this.state.modalNum === 2) {
            modalContent =
                <View style={{  backgroundColor: '#FFFFFF', height: 236, width:370, alignSelf: 'center', borderRadius: 20, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 17}}>CatchUp! needs to send you notifications</Text>
                    <Text style={{textAlign: 'center', marginTop: 5, lineHeight: 20,}}>The app will notify you when you and your friends are nearby.</Text>
                    <View style={{backgroundColor: '#925dc5', borderRadius:40, height:57, width:278,  justifyContent:'center', marginTop: 30}}>
                        <Button color='#FFFFFF' title={'GET NOTIFIED'} onPress={() => this.continueToMain()}/>
                    </View>

                    <Button color='#925dc5' title={'skip'} onPress={() => this.props.navigation.navigate('Friends', {friendsList:this.friendsList})}/>
                </View>
        }
        return (

                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <Modal isVisible={this.state.modalVisible}>
                        {modalContent}
                    </Modal>
                    {page}
                    {navbutton}

                </View>


        );
    }
}

