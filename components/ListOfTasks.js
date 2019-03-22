import React from 'react';
import { StyleSheet } from 'react-native';
import {
  List, H2, Text, Separator, Button, Icon, View, Form, Textarea, Label, H3,
} from 'native-base';
import PropTypes from 'prop-types';
import { setAvailability, setAllAvailabilities, setStatus } from '../firebase/tasker';

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  button: {
    margin: 5,
    alignSelf: 'center',
  },
  statusForm: {
    width: 300,
  },
  statusBtn: {
    marginTop: 2,
    marginLeft: 2,
  },
  statusField: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  categoryTitle: {
    alignSelf: 'center',
    marginLeft: -10,
  },
});

class TaskList extends React.Component {
  static propTypes = {
    currentCategories: PropTypes.object.isRequired,
    uid: PropTypes.string.isRequired,
    availableNow: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      categories: new Map(),
      checks: new Map(),
      editMode: new Map(),
      editStatus: '',
    };
    this.makeCheckboxes = this.makeCheckboxes.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
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
              return null;
            });
          }
          return null;
        });
      }
      return null;
    });
    this.setState({ categories: currentCategories });
  }

  componentWillReceiveProps(nextProps) {
    const { availableNow, uid } = nextProps;
    const { categories, checks } = this.state;
    const currentAvailableNow = availableNow;
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
    } else if (uid !== this.props.uid) {
      //
    } else {
      this.setState({ categories: nextProps.currentCategories });
    }
  }

  onChangeEdit = (e) => {
    this.setState({ editStatus: e.nativeEvent.text });
  }

  toggleEditMode(categoryID, subCategoryID) {
    const { editMode, editStatus } = this.state;
    const { uid } = this.props;
    if (!(editMode.has(subCategoryID))) {
      editMode.set(subCategoryID, false);
    }
    editMode.set(subCategoryID, !editMode.get(subCategoryID));
    console.log(editMode.get(subCategoryID), editStatus);
    if (!editMode.get(subCategoryID) && editStatus !== '') {
      console.log('Update now:', editStatus, subCategoryID);
      setStatus(categoryID, subCategoryID, editStatus, uid);
      this.setState({ editStatus: '' });
    }
    this.setState({ editMode });
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
    const { categories, checks, editMode } = this.state;
    const { availableNow } = this.props;
    return (
      <View>
        {
          Object.keys(categories).map((categoryID) => {
            if (categoryID !== 'category_ids') {
              return (
                <List key={categoryID}>
                  <Separator>
                    <H2 style={styles.categoryTitle}>{categoryID}</H2>
                  </Separator>
                  <View style={styles.buttons}>
                    {
                      Object.keys(categories[categoryID]).map((subCategoryID) => {
                        if (subCategoryID !== 'sub_category_ids') {
                          const { status } = categories[categoryID][subCategoryID];
                          return (
                            <View key={subCategoryID}>
                              <Button
                                bordered={!checks.get(categoryID).get(subCategoryID).get('available')}
                                disabled={!availableNow}
                                onPress={() => this.handleCheckbox(categoryID, subCategoryID)}
                                style={styles.button}
                                iconLeft
                                rounded
                                small
                              >
                                <Icon name={checks.get(categoryID).get(subCategoryID).get('available') ? 'md-checkbox-outline' : 'md-square-outline'} />
                                <Text>{subCategoryID}</Text>
                              </Button>
                              {
                                checks.get(categoryID).get(subCategoryID).get('available') && (
                                  <View style={styles.statusField}>
                                    {
                                      status && status.msg ? (
                                        !editMode.get(subCategoryID) ? <Text>{status.msg}</Text> : (
                                          <Form style={styles.statusForm}>
                                            <Label>Edit your status:</Label>
                                            <Textarea onChange={this.onChangeEdit} bordered placeholder={status.msg} />
                                          </Form>
                                        )
                                      ) : (
                                        !editMode.get(subCategoryID) ? <Text>No status set yet.</Text> : (
                                          <Form style={styles.statusForm}>
                                            <Label>Set your status:</Label>
                                            <Textarea onChange={this.onChangeEdit} bordered placeholder="Set your status here. Maybe enter the time you're free? Or a more specific location?" />
                                          </Form>
                                        )
                                      )
                                    }
                                    <Button
                                      style={styles.statusBtn}
                                      rounded
                                      small
                                      success={editMode.get(subCategoryID)}
                                      onPress={() => this.toggleEditMode(categoryID, subCategoryID)}
                                    >
                                      <Icon name={editMode.get(subCategoryID) ? 'md-checkmark' : 'md-create'} />
                                    </Button>
                                  </View>
                                )
                              }
                            </View>
                          );
                        }
                        return null;
                      })
                    }
                  </View>
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
