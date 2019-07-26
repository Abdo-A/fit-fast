import { connect } from 'react-redux';
import React, { Component } from 'react';

import { loadFonts } from './assets/styles/fonts/loadFonts';
import EnhancedView from './components/common/EnhancedView';
import MainNavigator from './routes/MainNavigator';
import SideMenu from './routes/SideMenu';

// The main App component with the following configured:
// => React Navigation
// => Side Menu (Drawer)

class AppConfigured extends Component {
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
    const { isLoading } = this.props;

    return (
      <SideMenu>
        <EnhancedView isLoading={isLoading}>
          <MainNavigator />
        </EnhancedView>
      </SideMenu>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.general.isLoading
});

export default connect(mapStateToProps)(AppConfigured);
