import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import SideDrawer from 'react-native-side-menu';

import * as generalActions from '../../store/actions/generalActions';
import styles from './styles';
import { colors } from '../../assets/styles/base';

class SideMenu extends Component {
  onChangeMenu = (opened) => {
    if (opened) {
      this.props.openSideMenu();
    } else {
      this.props.closeSideMenu();
    }
  };

  render() {
    const list = [
      {
        title: 'Sign In',
        icon: 'person-pin'
      },
      {
        title: 'Sign Up',
        icon: 'person-add'
      }
    ];

    const menu = (
      <View style={styles.container}>
        {list.map((item, i) => (
          <ListItem
            containerStyle={styles.menuItemContainer}
            titleStyle={styles.menuItemText}
            style
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon, color: colors.white.toString() }}
          />
        ))}
      </View>
    );

    return (
      <SideDrawer
        menu={menu}
        isOpen={this.props.open}
        onChange={this.onChangeMenu}
      >
        {this.props.children}
      </SideDrawer>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.general.sideMenuOpen
});

const mapDispatchToProps = {
  openSideMenu: generalActions.openSideMenu,
  closeSideMenu: generalActions.closeSideMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
