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


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
      availableNow: false,
    };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  onClickAvailableNow(newState){
      this.setState(newState);
      // Code to make the buttons ungreyed out
      
  }
  render() {
    return (
      <Container>
        <Header />
        <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" 
        }}>
        <Thumbnail source={{uri: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/42101555_1951574751531281_7865144489839427584_o.jpg?_nc_cat=108&_nc_ht=scontent-sjc3-1.xx&oh=7ce63cec19f1972cf559b5bbb12a24ff&oe=5D21323A'}} />
          <Text>Victor Cheng</Text>
          <Text note> Completed 9 tasks </Text>
        </View>

        <Text style={styles.tagline} note> Make money and meet new students whenever you're free </Text>

        <Content>
          <ListItem style= { styles.availableNow } icon>
              <Text style={{  fontWeight: 'bold' }}> Available Now </Text>
             <Switch style={styles.center} 
                     onValueChange={(value) => this.onClickAvailableNow({availableNow: value})} 
                     value={this.state.availableNow} />
          </ListItem>
          <TaskList />
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
