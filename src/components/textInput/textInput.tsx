import React, { FC } from 'react';
import { View, TextInput as RNTextInput, Text } from 'react-native';

import { TextInputProps } from './types';
import { textInputStyles } from './styles';

export const TextInput: FC<TextInputProps> = ({ label, value }) => {
  return (
    <View style={textInputStyles.wrapper}>
      <Text style={textInputStyles.label}>{label}</Text>
      <RNTextInput value={value} style={textInputStyles.input} />
    </View>
  );
};
