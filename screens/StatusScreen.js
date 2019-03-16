import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import {TaskList} from '../components/ListOfTasks';

import { Container, Header, Content, List, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Thumbnail } 
from 'native-base';

import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys.js';
import 'firebase/auth';
import 'firebase/database';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
      availableNow: false,
      currentTaskerProfile: new Map(),
      currentCategories: new Map(),
      currentUser: new Map(),
    };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);

    if(!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    firebase.database().ref('taskers/ids').once('value').then((idsSnap) => {
      let id = null;
      idsSnap.forEach((idSnap) => {
        if (idSnap.val() === "Test User") {
          id = idSnap.key;
          this.setState({currentTaskerName: idSnap.val()});
        }
      });
      firebase.database().ref('taskers').once('value').then((users) => {
        users.forEach((user) => {
          if (user.key === id) {
            this.setState({
              currentTaskerProfile: user.val().tasker_profile,
              currentCategories: user.val().categories,
            });
          }
        });
      });
      firebase.database().ref(`users/${id}/profile`).once('value').then((profile) => {
        this.setState({
          currentUser: profile.val(),
        });
      });
    });
  }

  onClickAvailableNow(newState){
      this.setState(newState);
      // Code to make the buttons ungreyed out 
      // Fire Firebase that this tasker is looking for tasks

  }
  render() {
    const { currentTaskerProfile, currentCategories, currentTaskerName } = this.state;
    return (
      <Container>
        <Header />
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{uri: currentTaskerProfile.url}} />
            </Left>
            <Body style={{ height: '100%' }}>
              <Text>{currentTaskerName}</Text>
              <Text note>{currentTaskerProfile.tagline}</Text>
            </Body>
            <Right>
              <Text note>Tasks completed: 5</Text>
            </Right>
          </ListItem>
          <ListItem style={{ alignSelf: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>Available Now </Text>
            <Switch
              onValueChange={(value) => this.onClickAvailableNow({availableNow: value})} 
              value={this.state.availableNow}
            />
          </ListItem>
          <TaskList currentCategories={currentCategories} />
        </Content>
      </Container>
    );
  }


  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  tagline: {
    textAlign: 'center',
    fontSize: 11,
  },
  availableNow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
