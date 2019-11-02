import React, { Component } from 'react';
import FList from '../components/FList';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';


import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation'

export default class YenaChat extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {

        return (
            <View>
                <Image source={require('../../assets/yenachat.jpg')} style={{width:410, height: 780, marginLeft: 0, marginTop: 70}}/>
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