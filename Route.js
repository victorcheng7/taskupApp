import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Status from './screens/StatusScreen';
import Login from './screens/Login';

const Routes = () => (
  <Router navigationBarStyle={{ backgroundColor: '#001529' }}>
    <Scene key="root" headerTintColor="#fff">
      <Scene key="Login" component={Login} title="Login" initial />
      <Scene key="Status" component={Status} title="Status" />
    </Scene>
  </Router>
);

export default Routes;
