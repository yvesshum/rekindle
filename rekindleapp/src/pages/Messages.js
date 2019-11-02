import React, { Component } from 'react';
import FList from '../components/FList';  
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';


import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'

export default class Messages extends Component {
  state = {
    search: '',
    activeTab: 'Friends'
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

    updateSearch = search => {
        this.setState({ search });
      };

      

    render() {
        const { navigation } = this.props;

       const friendsList = navigation.getParam('friendsList');
      const { search } = this.state;

      return (
        <View>
             {this.props.blank == "True" ? 

                <View style={styles.heading}>
                            
                <Text style={styles.name}>Long time no talk, nameHere</Text>
 
                {/* <Image
                style={styles.image}
                style={{width: 100, height: 100}}
                source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                /> */}

                </View>
                :
                <View style={styles.newHeading}>

                    <Text style={styles.title}>New Message</Text>

                <SearchBar
                        platform="ios"
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                        style={styles.search}
                    />

                    <Text>People</Text>

                    {friendsList.map((friend) => {
                        console.warn(friend.name);
                        if (search.length < 3 || (friend.name).slice(0, this.state.search.length) == this.state.search) {
                        <FList key={friend.id} name={friend.name} />
                        }
                    })}


                </View>
                }

            
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