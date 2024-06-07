import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';
import globalStyles from '../styles/globalStyles';

interface Props {
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
  children?: string | any;
  title?: boolean;
}

const BaseText: React.FC<Props> = props => {
  const {color, size, flex, font, styles, children, title} = props;

  return (
    <Text
      style={[
        globalStyles.textBase,
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ?? title ? 24 : 14,
          fontFamily: font ?? title ? fontFamilies.bold : fontFamilies.medium,
        },
        styles,
      ]}>
      {children}
    </Text>
  );
};

export default BaseText;
