import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../../components/ButtonComponent';
import i18n from '../../locales/i18n';
import globalStyles from '../../styles/globalStyles';
import {appColors} from '../../constants/appColors';

const LoginScreen = () => {
  return (
    <View
      style={[
        globalStyles.container,
        {
          padding: 16,
          backgroundColor: 'orange',
        },
      ]}>
      <Text
        style={{
          marginBottom: 100,
        }}>
        LoginScreen
      </Text>

      <ButtonComponent
        type="link"
        color={appColors.primary}
        text={i18n.t('dang_nhap')}
        icon={
          <View>
            <Text>A</Text>
          </View>
        }
      />
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
