import {View, Text} from 'react-native';
import React from 'react';

interface SpaceProps {
  width?: number;
  height?: number;
}

const SpaceComponent = (props: SpaceProps) => {
  const {width, height} = props;

  return (
    <View
      style={{
        width,
        height,
      }}></View>
  );
};

export default SpaceComponent;
