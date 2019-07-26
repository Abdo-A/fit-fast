import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import React from 'react';

import { gaps, fontSizes, colors } from '../../../assets/styles/base';
import * as generalActions from '../../../store/actions/generalActions';

const SideMenuOpener = ({ toggleSideMenu }) => {
  return (
    <Icon
      name="ios-person"
      type="ionicon"
      onPress={toggleSideMenu}
      iconStyle={{
        margin: gaps.sm,
        fontSize: fontSizes.xlg,
        color: colors.primaryLight
      }}
    />
  );
};

const mapDispatchToProps = {
  toggleSideMenu: generalActions.toggleSideMenu
};

export default connect(
  null,
  mapDispatchToProps
)(SideMenuOpener);
