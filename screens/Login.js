import React from 'react';
import {
  Button, Content, Container, Text, Form, Item, Input, Icon, Label, H1, H3, View,
} from 'native-base';
import { StyleSheet, Linking, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase, { loginWithFacebook, loginWithFirebase } from '../firebase/firebaseInit';

const styles = StyleSheet.create({
  body: {
    width: 350,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    marginTop: 120,
    fontSize: 40,
  },
  facebook: {
    marginTop: 25,
  },
  loginTitle: {
    marginTop: 75,
  },
  loginBtn: {
    marginTop: 25,
    alignSelf: 'center',
    width: 200,
  },
  loginBtnTxt: {
    marginLeft: 20,
  },
  registerBtn: {
    alignSelf: 'center',
  },
});

class Login extends React.Component {
  static navigationOptions = {
    header: null,
  }

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
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Content>
          <View style={styles.body}>
            <Text style={styles.title}>TaskUp</Text>
            <Button rounded style={styles.facebook} block large onPress={() => loginWithFacebook()}>
              <Icon active name="logo-facebook" />
              <Text>Continue with Facebook</Text>
            </Button>
            <H3 style={styles.loginTitle}>Login without Facebook</H3>
            <View style={styles.loginForm}>
              <Form>
                <Item floatingLabel>
                  <Icon active name="md-person" />
                  <Label>Email</Label>
                  <Input type="email" onChangeText={text => this.setState({ email: text })} />
                </Item>
                <Item floatingLabel last>
                  <Icon active name="md-lock" />
                  <Label>Password</Label>
                  <Input secureTextEntry onChangeText={text => this.setState({ password: text })} />
                </Item>
              </Form>
              <Button rounded style={styles.loginBtn} onPress={() => this.loginFirebase()}>
                <Icon name="md-log-in" />
                <Text style={styles.loginBtnTxt}>Sign in</Text>
              </Button>
              <Button style={styles.registerBtn} transparent info onPress={() => { Linking.openURL('https://taskup.org'); }}>
                <Text>Not registered? Register here!</Text>
              </Button>
            </View>
          </View>
        </Content>
        <View style={{ height: 100 }} />
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
