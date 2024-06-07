import {
  View,
  Text,
  Image,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import Swiper from 'react-native-swiper';
import images from '../../assets/images';
import {appInfo} from '../../utils/appInfo';
import {appColors} from '../../constants/appColors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomViewOnBoarding from '../../components/BottomViewOnBoarding';
import NavigationService from '../../navigators/index';
import SCREEN_NAME from '../../utils/screenName';

const OnBoardingScreen = () => {
  const insets = useSafeAreaInsets();

  const [indexTab, setIndexTab] = useState<number>(0);

  const handleNextPage = () => {
    setIndexTab(prev => prev + 1);
  };

  const handleSkip = () => {
    NavigationService.navigate(SCREEN_NAME.LOGIN_SCREEN);
  };

  return (
    <View style={[globalStyles.container, {paddingTop: insets.top}]}>
      <Swiper
        index={indexTab}
        onIndexChanged={index => setIndexTab(index)}
        activeDotColor={appColors.white}
        showsButtons
        loop={false}
        style={{}}>
        <View style={{flex: 1}}>
          <Image
            resizeMode="contain"
            style={{
              width: appInfo.sizes.WIDTH - 40,
              height: appInfo.sizes.HEIGHT - 300,
              alignSelf: 'center',
            }}
            source={images.img_introduce_1}
          />

          <BottomViewOnBoarding
            handleNextPage={handleNextPage}
            handleSkip={handleSkip}
          />
        </View>

        <View style={{flex: 1}}>
          <Image
            resizeMode="contain"
            style={{
              width: appInfo.sizes.WIDTH - 40,
              height: appInfo.sizes.HEIGHT - 300,
              alignSelf: 'center',
            }}
            source={images.img_introduce_2}
          />
          <BottomViewOnBoarding
            handleNextPage={handleNextPage}
            handleSkip={handleSkip}
          />
        </View>

        <View style={{flex: 1}}>
          <Image
            resizeMode="contain"
            style={{
              width: appInfo.sizes.WIDTH - 40,
              height: appInfo.sizes.HEIGHT - 300,
              alignSelf: 'center',
            }}
            source={images.img_introduce_3}
          />
          <BottomViewOnBoarding
            handleNextPage={handleNextPage}
            handleSkip={handleSkip}
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    color: appColors.white,
  },
});

export default OnBoardingScreen;
