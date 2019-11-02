import React, { Component } from 'react';
import FList from '../components/FList';  
import Log from '../components/Log'
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import { withNavigation} from 'react-navigation';

import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'

class Friends extends Component {
  static navigationOptions = {
    header: null,
};

constructor(props) {
  super(props);
  this.state = {
    search: '',
    activeTab: 'Friends',
    friendsList: this.props.friendsList
  };

}


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
    let friendList = userData.friends;
    console.log('uid', userID);
    let friendData = {};
    friendList.forEach(friend => {
        let friendName = this.getUserData(friend).name;
        friendData[friend] = [friend, friendName]
    });
    console.log('data', friendData);
    let friendNames = Object.keys(friendData).map(id => [friendData[id][0], friendData[id][1]]);
    return friendNames
  }
 
  getUserData(id) {
        //since we don't have a database here we go!
      switch (id) {
          case '2684866978225110':
              return require('../../assets/userData/2684866978225110.json');
          case '2559221700767822':
              return require('../../assets/userData/2559221700767822.json');
          case '2984866978225110':
              return require('../../assets/userData/2984866978225110.json');
          default:
              return require('../../assets/userData/2559221700767822.json');
      }
    }

    render() {

      let friendsList = this.props.navigation.getParam('friendsList');
      console.log('FFFLIST', friendsList);
      friendsList = ["2684866978225110", "2984866978225110"];
      let userName = this.props.navigation.getParam('userName');

      console.log('username', userName);
      console.log('friendsList', friendsList);
      let flists = this.getFriendsFromUser(userName).map((friend) => {
        return {
          name: friend[1],
          id: friend[0],
          active: 0.5
        }
      })

      const { search } = this.state;


      return (
       <View style={FriendStyles.flex}>
         {this.state.activeTab == 'Friends' ?
            <ScrollView>
            {/* Friends list */}
              <Text style={FriendStyles.header}>Friends</Text>
              
              <SearchBar
                platform="ios"
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
              />

               {flists.map((friend) => {
                 console.warn(flists);
                if (search.length < 3 || (friend.name).slice(0, this.state.search.length) == this.state.search) {
                  return (<FList key={friend.id} name={friend.name}></FList>)
                }
              })}
            </ScrollView> : 

            // Chat Messages

            <ScrollView>

              <View style={FriendStyles.chatHeader}>
                <Text style={FriendStyles.title}>Messages &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </Text>
                <Icon style={FriendStyles.add} size={50} color="black" name="add-box" onPress={() => navigate('Messages', {blank:"True", userName: this.props.userName, friendsList: flists})}/>
              </View>

              
              <SearchBar
                platform="ios"
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
                style={FriendStyles.chatSearch}
              />

              {this.getUserData("2684866978225110").chats.map((chat) => {
                return (<Log date={chat.date} from={chat.from} msg={chat.last_message} />)
              })}

            </ScrollView>
          
            }

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
      marginTop: 80,
      fontSize: 25,
      marginBottom: 20,
      flexDirection:'row', 
      textAlign: "center",
    },
    add: {
      marginLeft: 500
    },
    chatHeader: {
      marginTop: 80,
      marginBottom: 20,
      flexDirection:'row', 
      textAlign: "center",
    },
    title: {
      marginLeft: 150,
      fontSize: 25,
      marginTop: 10,
      textAlign: "center"
    },
    chatSearch: {
      position: 'absolute',
      marginBottom: 30
    },
    flex: {
      flex: 1
    },
    footer: {
      position: 'relative',
      marginBottom: 0
    }
});
export default withNavigation(Friends);