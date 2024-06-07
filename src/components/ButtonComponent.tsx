import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import BaseText from './BaseText';
import globalStyles from '../styles/globalStyles';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

interface PropButton {
  icon?: ReactNode;
  text?: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
}

const ButtonComponent: React.FC<PropButton> = props => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textStyles,
    onPress,
    iconFlex,
  } = props;

  return type === 'primary' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        {
          backgroundColor: color ?? appColors.white,
        },
      ]}>
      {icon && icon}
      <BaseText
        flex={icon && iconFlex === 'right' ? 1 : 0}
        font={fontFamilies.medium}
        styles={[
          textStyles,
          {
            marginLeft: 12,
          },
        ]}
        color={textColor ?? appColors.white}>
        {text}
      </BaseText>

      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity>
      <BaseText color={type === 'link' ? appColors.primary : appColors.text}>
        {text}
      </BaseText>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
