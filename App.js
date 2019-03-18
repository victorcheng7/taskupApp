import React from 'react';
import { Font, AppLoading } from 'expo';
import Routes from './Route';

console.disableYellowBox = true;

export default class App extends React.Component {
  state = {
    fontsAreLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });

    this.setState({ fontsAreLoaded: true });
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return (
      <Routes />
    );
  }
}
