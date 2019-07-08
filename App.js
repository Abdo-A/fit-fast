// import { Font } from 'expo';
import React, { Component } from 'react';

// import { Root } from 'native-base';
import { Provider } from 'react-redux';

import MainNavigator from './src/routes/MainNavigator';
import store from './src/store/createStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
