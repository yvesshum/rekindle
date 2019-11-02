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

  getFriendsFromUser(userID) {
    let userData = this.getUserData(userID); //Might need to run JSON.parse(), not sure
    let friendList = userData.friends
    let friendData = {};
    friendList.forEach(friend => {
        let friendName = this.getUserData(friend.id).name
        friendData[friend.id] = [friend, friendName]
        
    });
    let friendNames = Object.keys(friendData).map(id => [friendData[id][0], friendData[id][1]])
    return friendNames
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
      const { navigation } = this.props;

      const userName = navigation.getParam('userName', 'NO-ID');

      flists = this.getFriendsFromUser(userName).map((friend) => {
        return {
          name: friend[1],
          id: friend[0]
        }
      })

      const { search } = this.state;


      return (
       <View style={FriendStyles.flex}>
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
    },
    flex: {
      flex: 1
    },
    footer: {
      position: 'relative',
      marginBottom: 0
    }
});