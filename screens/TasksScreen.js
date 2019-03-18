import React from 'react';
import {
  Container,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text, Card, CardItem, Thumbnail, Button, Left, Body,
  Right, ScrollableTab,
} from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';

import 'firebase/auth';
import 'firebase/database';
import { getTasker } from '../firebase/tasker';

const styles = StyleSheet.create({
  cards: {
    alignItems: 'center',
  },
  card: {
    flex: 0,
    width: '90%',
  },
  textLarge: {
    fontSize: 20,
  },
  moneyText: {
    flex: 1,
    flexDirection: 'row',
  },
  scroll: {
    height: 900,
  },
  noRequests: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class TasksScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  constructor(props) {
    super(props);
    this.state = {
      availableNow: false,
      taskerProfile: {},
      taskerCategories: {},
      userProfile: {},
      uid: 'DDje16vHzjPiKBksXqwiUrBkIr43',
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
    // console.log(this.props);
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

  render() {
    const dataDriving = [
      {
        url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png',
        name: 'Marius Eskedal',
        request: 'Driving, All arround IV',
        time: '00:12',
        pay: '$2.5/Ride',
      },
      {
        url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png',
        name: 'Mads Sundseth',
        request: 'Driving, To downtown',
        time: '00:20',
        pay: '$5/Ride',
      },
      {
        url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png',
        name: 'Victor Cheng',
        request: 'Driving, To Costco',
        time: '00:05',
        pay: '$3/Ride',
      },
    ];
    const dataCleaning = [
      {
        url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png',
        name: 'Navjot Singh',
        request: 'Cleaning, Bathroom',
        time: '00:08',
        pay: '$10/Hour',
      },
    ];
    const requestsDriving = dataDriving.map(user => (
      <Card key={user.name} style={styles.card}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: user.url}} />
            <Body>
              <Text>{user.name}</Text>
              <Text note>Request: {user.request}</Text>
            </Body>
          </Left>
          <Right>
            <Text>Time left</Text>
            <Text style={styles.textLarge}>{user.time}</Text>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.textLarge}>
              Ready to pay: {user.pay}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name="md-close-circle-outline" />
              <Text>Reject</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name="md-checkmark-circle-outline" />
              <Text>Accept</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    ));

    const requestsCleaning = dataCleaning.map(user => (
      <Card key={user.name} style={styles.card}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: user.url }} />
            <Body>
              <Text>{user.name}</Text>
              <Text note>
                {'Request: '}
                {user.request}
              </Text>
            </Body>
          </Left>
          <Right>
            <Text>Time left</Text>
            <Text style={styles.textLarge}>{user.time}</Text>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.textLarge}>
              {'Ready to pay: '}
              {user.pay}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{ color: '#87838B' }}>
              <Icon name="md-close-circle-outline" />
              <Text>Reject</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent textStyle={{ color: '#87838B' }}>
              <Icon name="md-checkmark-circle-outline" />
              <Text>Accept</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    ));

    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading={(
            <TabHeading>
              <Icon name="md-car" />
              <Text>Driving</Text>
            </TabHeading>
            )}
          >
            <ScrollView contentContainerStyle={styles.scroll}>
              <Container style={styles.cards}>
                {requestsDriving}
              </Container>
            </ScrollView>
          </Tab>
          <Tab heading={(
            <TabHeading>
              <Icon name="md-home" />
              <Text>Cleaning</Text>
            </TabHeading>
            )}
          >
            <ScrollView contentContainerStyle={styles.scroll}>
              <Container style={styles.cards}>
                {requestsCleaning}
              </Container>
            </ScrollView>
          </Tab>
          <Tab heading={(
            <TabHeading>
              <Icon name="md-people" />
              <Text>Homework</Text>
            </TabHeading>
            )}
          >
            <Container style={styles.noRequests}>
              <Text>No requests yet...</Text>
            </Container>
          </Tab>
          <Tab heading={(
            <TabHeading>
              <Icon name="md-notifications" />
              <Text>Other</Text>
            </TabHeading>
            )}
          >
            <Container style={styles.noRequests}>
              <Text>No requests yet...</Text>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
