import React from 'react';
import { WebBrowser } from 'expo';
import { StyleSheet } from 'react-native';
import {
  Container, Content, ListItem, Text, Left, Body, Right, Switch, Thumbnail,
} from 'native-base';
import { getTasker } from '../firebase/tasker';
import TaskList from '../components/ListOfTasks';

const styles = StyleSheet.create({
  tagline: {
    textAlign: 'center',
    fontSize: 11,
  },
  availableNow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableNow: false,
      taskerProfile: {},
      taskerCategories: {},
      userProfile: {},
      uid: props.uid,
    };
  }

  componentDidMount() {
    const { uid } = this.state;
    console.log(uid);
    getTasker(uid, this.taskerCallback);
  }

  componentWillUnmount() {
    console.log('unmounted status');
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
    // const { }
    // if (newState.availableNow) {

    // }
    // Code to make the buttons ungreyed out
    // Fire Firebase that this tasker is looking for tasks
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
  };

  _maybeRenderDevelopmentModeWarning() {
    // eslint-disable-next-line no-undef
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          {'Development mode is enabled, your app will be slower but you can use useful development tools. '}
          {learnMoreButton}
        </Text>
      );
    }
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode, your app will run at full speed.
      </Text>
    );
  }

  render() {
    const {
      taskerProfile, userProfile, taskerCategories, availableNow,
    } = this.state;
    return (
      <Container>
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
