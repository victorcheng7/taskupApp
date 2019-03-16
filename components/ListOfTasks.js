import React from 'react';
import { View } from 'react-native'
import { Content, List, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Thumbnail, CheckBox } 
from 'native-base';
import Colors from '../constants/Colors';

export class TaskList extends React.Component {
  render() {
    return (
      <View>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>Homework</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Massage</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Driving</Text>
          </Body>
        </ListItem>
      </View>
    );
  }
}