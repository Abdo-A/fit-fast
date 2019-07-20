import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native';
import React from 'react';

import { colors } from '../assets/styles/base';
import TabNavigator from './TabNavigator';

const RootStack = createStackNavigator(
  {
    Tab: TabNavigator
  },
  {
    initialRouteName: 'Tab',

    defaultNavigationOptions: ({ navigation }) => {
      //--first, we check which screen it is:
      let screen = navigation.state.routeName;

      //values we will modify then return:
      let headerTitle = '';
      let headerRight = '';
      let headerLeft = '';
      let headerStyle = {
        backgroundColor: colors.secondary
      };
      let headerTitleStyle = {
        color: colors.white
      };
      let tabBarVisible = true;
      //and so on...

      //For each screen:
      if (screen === 'Tab') {
        const { routes, index } = navigation.state;
        let tabScreen = routes[index].routeName;

        if (tabScreen === 'tabScreen1') {
          headerRight = (
            <Text
              style={{ marginRight: 20, fontSize: 20, color: colors.secondary }}
            />
          );
          headerStyle = {
            backgroundColor: colors.primary
          };
        }

        if (tabScreen === 'tabScreen2') {
          headerRight = (
            <Text
              style={{ marginRight: 20, fontSize: 20, color: colors.secondary }}
            />
          );
          headerStyle = {
            backgroundColor: colors.primary
          };
        }

        if (tabScreen === 'tabScreen3') {
          headerRight = (
            <Text
              style={{ marginRight: 20, fontSize: 20, color: colors.secondary }}
            />
          );
          headerLeft = (
            <Text
              style={{ marginRight: 20, fontSize: 20, color: colors.secondary }}
            />
          );
          headerStyle = {
            backgroundColor: colors.primary
          };
        }

        // Return these in case of tab screens
        return {
          tabBarVisible,
          headerStyle,
          headerTitle,
          headerRight,
          headerLeft,
          headerTitleStyle
          // and so on..
        };
      }

      // Return these for other screens
      return {
        headerRight,
        headerStyle,
        headerTitleStyle
      };
    }
  }
);

export default createAppContainer(RootStack);
