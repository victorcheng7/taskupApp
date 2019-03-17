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

import console from 'console';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import TaskList from '../components/ListOfTasks';

import { Container, Header, Content, List, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Thumbnail } 
from 'native-base';

import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys.js';
import 'firebase/auth';
import 'firebase/database';
import { getTasker } from '../firebase/tasker';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'My Availability',
  };

  constructor(props) {
    super(props);
    this.state = { 
      availableNow: false,
      taskerProfile: new Map(),
      taskerCategories: new Map(),
      userProfile: new Map(),
      uid: '',
    };


    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  componentDidMount() {
    getTasker('DDje16vHzjPiKBksXqwiUrBkIr43', this.taskerCallback);
  }

  componentWillUnmount() {
    console.log('unmounted');
  }

  taskerCallback = (tasker) => {
    this.setState({
      userProfile: tasker.profile,
      taskerCategories: tasker.categories,
      taskerProfile: tasker.tasker_profile,
    });
  }

  onClickAvailableNow = (newState) => {
    this.setState(newState);
    // Code to make the buttons ungreyed out 
    // Fire Firebase that this tasker is looking for tasks
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };

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

  render() {
    const { taskerProfile, userProfile, taskerCategories, availableNow } = this.state;
    return (
      <Container>
        <Header />
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: taskerProfile.url }} />
            </Left>
            <Body style={{ height: '100%' }}>
              <Text>{userProfile.name}</Text>
              <Text note>{taskerProfile.tagline}</Text>
            </Body>
            <Right>
              <Text note>Tasks completed: 5</Text>
            </Right>
          </ListItem>
          <ListItem style={{ alignSelf: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>Available Now </Text>
            <Switch
              onValueChange={value => this.onClickAvailableNow({ availableNow: value })}
              value={availableNow}
            />
          </ListItem>
          <TaskList currentCategories={taskerCategories} />
        </Content>
      </Container>
    );
  }

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
