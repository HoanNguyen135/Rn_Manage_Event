import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens';
import SCREEN_NAME from '../utils/screenName';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
