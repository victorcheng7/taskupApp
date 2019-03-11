import React from 'react';
import {
  Container,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text, Card, CardItem, Thumbnail, Button, Left, Body,
  List, ListItem, Right,
} from 'native-base';
import { StyleSheet, ScrollView, View } from 'react-native';

export default class TasksScreen extends React.Component {
  static navigationOptions = {
    title: 'Gauchos that needs you!',
  };

  render() {
    const data = [
      {
        url: 'https://graph.facebook.com/10157194301367028/picture?width=300&height=300',
        name: 'Marius Eskedal',
        request: 'Driving, All arround IV',
        time: '00:12',
        pay: '$2.5/Ride',
      },
      {
        url: 'https://graph.facebook.com/1048111128725506/picture?width=300&height=300',
        name: 'Navjot Singh',
        request: 'Cleaning, Bathroom',
        time: '00:08',
        pay: '$10/Hour',
      },
      {
        url: 'https://graph.facebook.com/10215865252657669/picture?width=300&height=300',
        name: 'Mads Sundseth',
        request: 'Driving, To downtown',
        time: '00:20',
        pay: '$5/Ride',
      },
      {
        url: 'https://graph.facebook.com/2173747382647349/picture?width=300&height=300',
        name: 'Victor Cheng',
        request: 'Driving, To Costco',
        time: '00:05',
        pay: '$3/Ride',
      },
    ];
    const requests = data.map((user) => (
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

    return (
      <Container>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Container style={styles.cards}>
            {requests}
          </Container>
        </ScrollView>
        {/* <Tabs>
          <Tab heading={ <TabHeading><Icon name="md-pricetags" /><Text>Requests</Text></TabHeading>}>
            <ScrollView>
              <Container style={styles.cards}>
                {requests}
              </Container>
            </ScrollView>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="md-calendar" /><Text>Upcoming Tasks</Text></TabHeading>}>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                  <Text>Sankhadeep</Text>
                  <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="md-done-all" /><Text>History</Text></TabHeading>}>
            <Text>Test 3</Text>
          </Tab>
        </Tabs> */}
      </Container>
    );
  }
}

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
  }
});
