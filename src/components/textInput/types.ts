import { TextInputProps as RNTextInputProps } from 'react-native';

export type TextInputProps = {
  value: string;
  label: string;
} & RNTextInputProps;
