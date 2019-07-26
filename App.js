import React, { Component } from 'react';

import AppConfigured from './src/AppConfigured';
import store from './src/store/createStore';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppConfigured />
      </Provider>
    );
  }
}
