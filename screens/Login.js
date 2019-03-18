import React from 'react';
import { Button, View, Content, Grid, Container, Header, Text, Form, Item, Input } from 'native-base';

import firebase, { loginWithFacebook, loginWithFirebase } from '../firebase/firebaseInit';
import { Actions } from 'react-native-router-flux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // uid: '',
    };
  }

  componentDidMount() {
    this._unsubcribe = firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // console.log("We are authenticated now!");
        // console.log(user.uid);
        Actions.Status({ uid: user.uid });
      }

      // Do other things
    });
  }

  componentWillUnmount() {
    this._unsubcribe();
  }

  loginFirebase = () => {
    const { email, password } = this.state;
    loginWithFirebase(email, password);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button
            onPress={() => loginWithFacebook()}
            title="Sign in with facebook"
            color="#3c50e8"
          >
            <Text>Sing in with FB</Text>
          </Button>

          <Form>
            <Item>
              <Input placeholder="Username" type="email" onChangeText={text => this.setState({ email: text })} />
            </Item>
            <Item last>
              <Input placeholder="Password" secureTextEntry onChangeText={text => this.setState({ password: text })} />
            </Item>
          </Form>
          <Button
            onPress={() => this.loginFirebase()}
            title="Sign in Manually"
            color="#3c50e8"
          >
            <Text>Sign in manual</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
