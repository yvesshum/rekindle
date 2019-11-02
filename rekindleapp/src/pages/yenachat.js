import React, { Component } from 'react';
import FList from '../components/FList';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import Modal from 'react-native-modal'


import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation'

export default class YenaChat extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalVisible: false,
        };
        this.setModalVisible = this.setModalVisible.bind(this);
    }

    static navigationOptions = {
        header: null,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    handleButtonPress() {
        this.setModalVisible(true);
    }

    continueToMain() {
        this.setModalVisible(false);

    }

    render() {

        let modalContent =
            <View style={{  backgroundColor: '#FFFFFF', height: 236, width:370, alignSelf: 'center', borderRadius: 20, alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 17}}>Notice!</Text>
                <Text style={{textAlign: 'center', marginTop: 5, lineHeight: 20,}}>Yena will only receive this if she also sends you something!</Text>
                <View style={{backgroundColor: '#925dc5', borderRadius:40, height:57, width:278,  justifyContent:'center', marginTop: 30}}>
                    <Button color='#FFFFFF' title={'SEND'} onPress={() => this.continueToMain()}/>
                </View>

                <Button color='#925dc5' title={'cancel'} onPress={() => this.setModalVisible(false)}/>
            </View>


        return (
            <View>
                <TouchableOpacity onPress={() => this.handleButtonPress()}>
                    <Image source={require('../../assets/yenachat.jpg')} style={{width:410, height: 780, marginLeft: 0, marginTop: 70, position:'absolute'}}/>
                </TouchableOpacity>
                <Modal isVisible={this.state.modalVisible}>
                    {modalContent}
                </Modal>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    heading: {
        alignItems: 'center',
        fontSize: 20,
        margin: 20
    },
    newHeading: {
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        marginTop: 70,
        marginBottom: 20
    },
    image: {
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
        textAlign: 'center'
    },
    details: {
        margin: 10
    },
    name: {
        fontSize: 20
    },
    search: {
        padding: 20,
    }

});