import React, { Component } from 'react';
import FList from '../components/FList';  
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';

import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'

export default class Friends extends Component {
  state = {
    search: '',
  };


  tabs = [
    {
      key: 'Friends',
      icon: 'gamepad-variant',
      label: 'Friends',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 25, 255, 0.16)'
    },
    {
      key: 'Chat',
      icon: 'movie',
      label: 'Chat',
      barColor: '#B71C1C',
      pressColor: 'rgba(55, 255, 255, 0.16)'
    },
    // {
    //   key: 'Profile',
    //   icon: 'music-note',
    //   label: 'Profile',
    //   barColor: '#E64A19',
    //   pressColor: 'rgba(255, 255, 25, 0.16)'
    // }
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

  updateSearch = search => {
    this.setState({ search });
  };

    render() {
      const { navigation } = this.props;

      flists = [{
        id: "f1",
        name: "Joe LastName"
      },
      {
        id: "f2",
        name: "Yena LastName"
      },
      {
        id: "f3",
        name: "Yves LastName"  
      },
      {
        id: "f4",
        name: "Jiaqi LastName"
      }]

      const { search } = this.state;


      return (
       <View>
            <ScrollView>
            {/* {navigation.getParam('userName', 'NO-ID')}'s  */}
              <Text style={FriendStyles.header}>Friends</Text>
              
              <SearchBar
                platform="ios"
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
              />

              {flists.map((friend) => {
                if (search.length < 3 || (friend.name).slice(0, this.state.search.length) == this.state.search) {
                  return (<FList key={friend.id} name={friend.name}></FList>)
                }
              })}
            </ScrollView>
            
            <View style={FriendStyles.footer}>
              <BottomNavigation 
                onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                renderTab={this.renderTab}
                tabs={this.tabs}
            />
            </View>
            
        </View>
      );
    }
  }

  const FriendStyles = StyleSheet.create({
    header: {
      marginTop: 20,
      marginBottom: 20,
      fontSize: 25,
      textAlign: "center",
      flex: 1
    },
    footer: {
      
    }
});