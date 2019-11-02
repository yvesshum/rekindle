//Logs a user in and sends back the corresponding data

import React, { Component } from 'react';

import {  View, Image, Text, Button, Modal, TouchableOpacity, TouchableHighlight} from 'react-native';

export default class Walkthrough extends Component {

    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);
        this.state={
            pageIndex: 0,
            modalVisible: false
        };
        this.setModalVisible = this.setModalVisible.bind(this)

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
        return (

                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{marginTop: 22}}>
                            <View>
                                <Text>Hello World!</Text>

                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    {page}
                    {navbutton}

                </View>


        );
    }
}

