import React from 'react';
import { View } from 'react-native'
import { Content, List, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Thumbnail, CheckBox } 
from 'native-base';
import Colors from '../constants/Colors';

export class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      categories: this.props.currentCategories,
    };
  }

  render() {
    console.log(this.state.categories);
    return (
      <View>
        <ListItem>
          <CheckBox />
          <Body>
            <Text>Homework</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox />
          <Body>
            <Text>Massage</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox />
          <Body>
            <Text>Driving</Text>
          </Body>
        </ListItem>
      </View>
    );
  }
}
