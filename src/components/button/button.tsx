import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { buttonStyles } from './styles';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  onPress,
  containerStyle,
  textWrapperStyle,
  textStyle,
  children,
  color = '#fff',
  backgroundColor = '#e1837f',
  width = 100,
}) => {
  return (
    <View style={[buttonStyles.container, containerStyle]}>
      <TouchableOpacity onPress={onPress}>
        <View style={[buttonStyles.textWrapper, textWrapperStyle, { backgroundColor, width }]}>
          <Text style={(buttonStyles.text, textStyle, { color })}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
