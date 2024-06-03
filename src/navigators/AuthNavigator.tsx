import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens';
import SCREEN_NAME from '../utils/screenName';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_NAME.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
