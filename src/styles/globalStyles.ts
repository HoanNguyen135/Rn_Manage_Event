import {StyleSheet} from 'react-native';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  textBase: {
    fontFamily: fontFamilies.regular,
    fontSize: 14,
    color: appColors.text,
  },
});

export default globalStyles;
