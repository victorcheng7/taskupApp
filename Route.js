import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Status from './screens/Status';
import Login from './screens/Login';

const Routes = () => (
  <Router navigationBarStyle={{ backgroundColor: '#222' }}>
    <Scene key="root" headerTintColor="#fff">
      <Scene key="Login" component={Login} title="Login" initial />
      <Scene key="Status" component={Status} title="Status" />
    </Scene>
  </Router>
);

export default Routes;