import { createMaterialTopTabNavigator } from 'react-navigation';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { colors, sizes } from '../assets/base';
import Elmenu from '../screens/TabScreens/Elmenu';
import Otlob from '../screens/TabScreens/Otlob';
import Talabaty from '../screens/TabScreens/Talabaty';

export default createMaterialTopTabNavigator(
  {
    //--specific navigationOptions for each tab
    tabScreen1: {
      screen: Elmenu,
      navigationOptions: {
        tabBarLabel: 'Menu',
        tabBarIcon: ({ tintColor }) => (
          <FIcon name="list-alt" size={24} color={tintColor} />
        )
      }
    },
    tabScreen2: {
      screen: Otlob,
      navigationOptions: {
        tabBarLabel: 'Order',
        tabBarIcon: ({ tintColor }) => (
          <FIcon name="arrow-right" size={24} color={tintColor} />
        )
      }
    },
    tabScreen3: {
      screen: Talabaty,
      navigationOptions: {
        tabBarLabel: 'My orders',
        tabBarIcon: ({ tintColor }) => (
          <MIcon name="food-apple" size={24} color={tintColor} />
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
