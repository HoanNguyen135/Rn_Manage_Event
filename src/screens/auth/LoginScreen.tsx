import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 100,
        }}>
        LoginScreen
      </Text>
      <Button
        title="Login"
        onPress={async () => {
          await AsyncStorage.setItem('accessToken', 'hahaha');
        }}
      />
    </View>
  );
};

export default LoginScreen;
