import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {appInfo} from '../utils/appInfo';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appColors} from '../constants/appColors';
import {useTranslation} from 'react-i18next';
import i18n from '../locales/i18n';
import BaseText from './BaseText';

interface BottomProps {
  handleNextPage?: () => void;
  handleSkip?: () => void;
}

const BottomViewOnBoarding: React.FC<BottomProps> = ({
  handleNextPage,
  handleSkip,
}) => {
  const insets = useSafeAreaInsets();

  const {t} = useTranslation();

  return (
    <View
      style={{
        width: appInfo.sizes.WIDTH - 20,
        height: 190,
        backgroundColor: appColors.primary,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginHorizontal: 10,
        alignSelf: 'center',
      }}>
      <View>
        <Text
          style={[
            styles.txt,
            {
              fontWeight: 'bold',
              fontSize: 18,
              alignSelf: 'center',
              marginTop: 10,
            },
          ]}>
          {'New App'}
        </Text>

        <Text
          style={[
            styles.txt,
            {
              fontSize: 15,
              alignSelf: 'center',
              marginTop: 10,
            },
          ]}>
          {'Schedule as required'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          position: 'absolute',
          width: appInfo.sizes.WIDTH - 20,

          bottom: insets.bottom - 5,
          zIndex: 9999,
        }}>
        <TouchableOpacity onPress={handleSkip}>
          <BaseText color={appColors.white}>{i18n.t('bo_qua')}</BaseText>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNextPage}>
          {/* <Text
            style={[
              styles.txt,
              {
                fontWeight: 'bold',
              },
            ]}>
            {i18n.t('tiep_theo')}
          </Text> */}

          <BaseText color={appColors.white}>{i18n.t('tiep_theo')}</BaseText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    color: appColors.white,
  },
});

export default BottomViewOnBoarding;
