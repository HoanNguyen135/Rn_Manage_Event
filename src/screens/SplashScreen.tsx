import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import {appInfo} from '../utils/appInfo';
import SpaceComponent from '../components/SpaceComponent';
import {appColors} from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      imageStyle={{flex: 1}}
      source={images.ic_backgroundSplash}>
      <Image
        style={{
          width: appInfo.sizes.WIDTH * 0.8,
          resizeMode: 'contain',
        }}
        source={images.ic_splashLoading}
      />
      <SpaceComponent height={20} />

      <ActivityIndicator color={appColors.gray} size={20} />
    </ImageBackground>
  );
};

export default SplashScreen;
