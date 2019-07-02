import { Font } from 'expo';
import React, { Component } from 'react';
// import { Root } from 'native-base';

import MainNavigator from './src/routes/MainNavigator';

export default class App extends Component {
  render() {
    return <MainNavigator />;
  }
}
