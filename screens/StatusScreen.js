import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content, ListItem, Text, Left,
  Body, Right, Switch, Thumbnail, View, Button, Icon,
} from 'native-base';
import { WebBrowser } from 'expo';
import PropTypes from 'prop-types';
import { getTasker } from '../firebase/tasker';
import TaskList from '../components/ListOfTasks';

const styles = StyleSheet.create({
  greenDot: {
    top: 15,
    height: 10,
    width: 10,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: '#62bd19',
  },
  grayDot: {
    top: 15,
    height: 10,
    width: 10,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: '#696969',
  },
  availableBtn: {
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  noteTagline: {
    marginTop: 5,
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'My Availability',
    headerLeft: null,
  };

  static propTypes = {
    uid: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      availableNow: false,
      taskerProfile: new Map(),
      taskerCategories: null,
      userProfile: new Map(),
      uid: props.uid,
    };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  componentDidMount() {
    const { uid } = this.state;
    getTasker(uid, this.taskerCallback);
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

  onClickAvailableNow = () => {
    const { availableNow } = this.state;
    this.setState({ availableNow: !availableNow });
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
      taskerProfile, userProfile, taskerCategories, availableNow, uid,
    } = this.state;
    return (
      <Container>
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail large source={{ uri: taskerProfile.url }} />
              <View style={availableNow ? styles.greenDot : styles.grayDot} />
            </Left>
            <Body style={{ height: '100%' }}>
              <Text>{userProfile.name}</Text>
              <Text style={styles.noteTagline} note>{taskerProfile.tagline}</Text>
            </Body>
            <Right>
              <Text note>Rating: 5/5</Text>
            </Right>
          </ListItem>
          <Button
            style={styles.availableBtn}
            success={availableNow}
            light={!availableNow}
            iconLeft
            rounded
            onPress={this.onClickAvailableNow}
          >
            <Icon name={availableNow ? 'md-checkbox-outline' : 'md-square-outline'} />
            <Text>Available Now</Text>
          </Button>
          {
            taskerCategories && <TaskList currentCategories={taskerCategories} uid={uid} availableNow={availableNow} />
          }
        </Content>
      </Container>
    );
  }
}
