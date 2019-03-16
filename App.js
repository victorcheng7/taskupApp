import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { Ionicons } from '@expo/vector-icons';

//import firebase from 'expo-firebase-app';
import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCFFGwFNvO1_fHHLXjzXW8e7nxx7HLVuk0',
  authDomain: 'taskup-8a36a.firebaseapp.com',
  databaseURL: 'https://taskup-8a36a.firebaseio.com',
  projectId: 'taskup-8a36a',
  storageBucket: 'taskup-8a36a.appspot.com',
  messagingSenderId: '81221159592',
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoadingComplete: false,
    };

    // Initialize firebase
    if(!firebase.apps.length) { firebase.initializeApp(config); }
    firebase.database().ref('/categories/Driving/ITUedQpWeESsaQObg9gUNsNu0vj2').once('value').then(function(snapshot) {
      console.log(snapshot);
    });
  }


  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
