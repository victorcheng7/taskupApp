import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/StatusScreen';
import TasksScreen from '../screens/TasksScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const mapNavigationStateParamsToProps = (SomeComponent) => {
  return class extends React.Component {
    static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics

    render() {
      const { navigation: {state: {params}}} = this.props;
      return <SomeComponent {...params} {...this.props} />;
    }
  };
};

const HomeStack = createStackNavigator({
  Home: { screen: mapNavigationStateParamsToProps(HomeScreen) },
});

HomeStack.navigationOptions = {
  tabBarLabel: 'My Status',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-person'
    />
  ),
};

const TasksStack = createStackNavigator({
  Tasks: { screen: mapNavigationStateParamsToProps(TasksScreen) },
});

TasksStack.navigationOptions = {
  tabBarLabel: 'My Tasks',
  tabBarIcon: ({ focused }) => {
    return (
      <TabBarIcon
        focused={focused}
        name='md-notifications'
      />
    );
  },
};

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  HomeStack,
  TasksStack,
  // SettingsStack,
});
