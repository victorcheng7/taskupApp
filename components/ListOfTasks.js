import React from 'react';
import { View } from 'react-native'
import { Content, List, Button, ListItem, Text, Icon, Left,
  Body, Right, Switch, Thumbnail, CheckBox, Card, CardItem } 
from 'native-base';
import Colors from '../constants/Colors';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      categories: new Map(),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentCategories } = nextProps;
    this.setState({ categories: currentCategories });
  }

  render() {
    const { categories } = this.state;
    const checkboxes = [];
    Object.keys(categories).map((category) => {
      if (category != 'category_ids') {
        checkboxes.push(
          <List key={category}>
            <ListItem itemDivider>
              <Text>{category}</Text>
            </ListItem>  
              {
                Object.keys(categories[category]).map((subCategory) => {
                  if (subCategory != 'sub_category_ids') {
                    return (
                      <ListItem key={subCategory}>
                        <CheckBox key={subCategory} />
                        <Body>
                          <Text>{subCategory}</Text>
                        </Body>
                      </ListItem>
                    );
                  }
                })
              }
          </List>
        );
      }
    })
    return (
      <View>
        {checkboxes}
      </View>
    );
  }
}

export default TaskList;
