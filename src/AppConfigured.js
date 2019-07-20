import { Provider } from 'react-redux';
import React, { Component } from 'react';

import { loadFonts } from './assets/styles/fonts/loadFonts';
import MainNavigator from './routes/MainNavigator';
import store from './store/createStore';

// The main App component with the following configured:
// => Redux
// => Navigator

export default class AppConfigured extends Component {
  state = {
    fontLoaded: false
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Promise.all(loadFonts);

    this.setState(() => ({ fontLoaded: true }));
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
