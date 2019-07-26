import { createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import React from 'react';

import { colors, sizes } from '../../assets/styles/base';
import Menu from '../../screens/TabScreens/common/Menu';
import MyOrders from '../../screens/TabScreens/User/MyOrders';
import Order from '../../screens/TabScreens/User/Order';
import UploadImage from '../../screens/tests/UploadImage';

export default createMaterialTopTabNavigator(
  {
    //--specific navigationOptions for each tab
    tabScreen1: {
      screen: Menu,
      navigationOptions: {
        tabBarLabel: 'Menu',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="font-awesome"
            name="list-alt"
            size={24}
            iconStyle={{ color: tintColor }}
          />
        )
      }
    },
    tabScreen2: {
      screen: Order,
      navigationOptions: {
        tabBarLabel: 'Order',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="font-awesome"
            name="arrow-right"
            size={24}
            iconStyle={{ color: tintColor }}
          />
        )
      }
    },
    tabScreen3: {
      screen: MyOrders,
      navigationOptions: {
        tabBarLabel: 'My orders',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="food-apple"
            size={24}
            iconStyle={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    // Config

    initialRouteName: 'tabScreen1',
    order: ['tabScreen1', 'tabScreen2', 'tabScreen3'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,

    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      activeTintColor: colors.white,
      inactiveTintColor: colors.secondary,

      style: {
        backgroundColor: colors.primary,
        height: sizes.bottomTabHeight,
        borderTopWidth: 0.5,
        borderTopColor: '#00000000'
      },
      labelStyle: {
        fontSize: 18
      },
      iconStyle: {},
      indicatorStyle: {
        backgroundColor: colors.secondary
      }
    }
  }
);
