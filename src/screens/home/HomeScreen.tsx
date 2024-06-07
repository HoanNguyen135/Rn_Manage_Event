import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 100,
        }}>
        HomeScreen
      </Text>

      <Button
        title="LogOut"
        onPress={async () => {
          await AsyncStorage.clear();
        }}
      />
    </View>
  );
};

export default HomeScreen;
