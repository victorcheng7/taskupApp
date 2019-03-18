import React from 'react';
import { View } from 'react-native';
import {
  List, ListItem, Text, Body, CheckBox,
} from 'native-base';
import PropTypes from 'prop-types';
import { setAvailability, setAllAvailabilities } from '../firebase/tasker';

class TaskList extends React.Component {
  static propTypes = {
    currentCategories: PropTypes.object.isRequired,
    uid: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      categories: new Map(),
      checks: new Map(),
    };
    this.makeCheckboxes = this.makeCheckboxes.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  componentDidMount() {
    const { currentCategories } = this.props;
    Object.keys(currentCategories).map((categoryID) => {
      if (categoryID !== 'category_ids') {
        Object.keys(currentCategories[categoryID]).map((subCategoryID) => {
          if (subCategoryID !== 'sub_category_ids') {
            Object.keys(currentCategories[categoryID][subCategoryID]).map((value) => {
              if (value === 'available') {
                this.makeCheckboxes(
                  categoryID,
                  subCategoryID,
                  currentCategories[categoryID][subCategoryID][value],
                );
              }
            });
          }
        });
      }
    });
    this.setState({ categories: currentCategories });
  }

  componentWillReceiveProps(nextProps) {
    const { availableNow } = nextProps;
    const { categories, checks } = this.state;
    const { uid } = this.props;
    const currentAvailableNow = this.props.availableNow;
    if (availableNow !== currentAvailableNow) {
      if (!availableNow) {
        setAllAvailabilities(categories, false, uid);
      } else {
        Object.keys(categories.category_ids).forEach((categoryID) => {
          Object.keys(categories[categoryID].sub_category_ids).forEach((subCategoryID) => {
            setAvailability(categoryID, subCategoryID, checks.get(categoryID).get(subCategoryID).get('available'), uid);
          });
        });
      }
    }

  }

  makeCheckboxes(categoryID, subCategoryID, value) {
    const { checks } = this.state;
    if (!(checks.has(categoryID))) {
      checks.set(categoryID, new Map());
    }
    checks.get(categoryID).set(subCategoryID, new Map());
    checks.get(categoryID).get(subCategoryID).set('available', value);
    this.setState({ checks });
  }

  handleCheckbox(categoryID, subCategoryID) {
    const { checks } = this.state;
    const { uid, availableNow } = this.props;
    checks.get(categoryID).get(subCategoryID).set('available', !checks.get(categoryID).get(subCategoryID).get('available'));
    if (availableNow) {
      setAvailability(categoryID, subCategoryID, checks.get(categoryID).get(subCategoryID).get('available'), uid);
    }
    this.setState({ checks });
  }

  render() {
    const { categories, checks } = this.state;
    return (
      <View>
        {
          Object.keys(categories).map((categoryID) => {
            if (categoryID !== 'category_ids') {
              return (
                <List key={categoryID}>
                  <ListItem itemDivider>
                    <Text>{categoryID}</Text>
                  </ListItem>
                  {
                    Object.keys(categories[categoryID]).map((subCategoryID) => {
                      if (subCategoryID !== 'sub_category_ids') {
                        return (
                          <ListItem key={subCategoryID}>
                            <CheckBox
                              key={subCategoryID}
                              checked={checks.get(categoryID).get(subCategoryID).get('available')}
                              onPress={() => this.handleCheckbox(categoryID, subCategoryID)}
                            />
                            <Body>
                              <Text>{subCategoryID}</Text>
                            </Body>
                          </ListItem>
                        );
                      }
                      return null;
                    })
                  }
                </List>
              );
            }
            return null;
          })
        }
      </View>
    );
  }
}

export default TaskList;
