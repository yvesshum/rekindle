import React, { Component } from 'react';
import FList from '../components/FList';  
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'

export default class Friends extends Component {
  tabs = [
    {
      key: 'games',
      icon: 'gamepad-variant',
      label: 'Games',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'movies-tv',
      icon: 'movie',
      label: 'Movies & TV',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Music',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

    render() {
      const { navigation } = this.props;

      flists = [{
        id: "f1",
        name: "Joe"
      },
      {
        id: "f2",
        name: "Yena"
      },
      {
        id: "f3",
        name: "Yves"  
      },
      {
        id: "f4",
        name: "Jiaqi"
      }]

      return (
        <SafeAreaView>
            <ScrollView>
              <Text>Hi {navigation.getParam('userName', 'NO-ID')}!</Text>

              {flists.map((friend) => {
                return (<FList key={friend.id} name={friend.name}></FList>
              )})}
            </ScrollView>
            
            <View style={FriendStyles.footer}>
              <BottomNavigation
                onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                renderTab={this.renderTab}
                tabs={this.tabs}
                style={FriendStyles.footer}
            />
            </View>
            
        </SafeAreaView>
      );
    }
  }

  const FriendStyles = StyleSheet.create({
    footer: {
      position: 'absolute', 
      left: 0,
      right: 0,
      bottom: 0,
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: -220
    }
});