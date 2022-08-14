import { TextStyle, ViewStyle } from 'react-native';

export type ButtonProps = {
  color?: TextStyle['color'];
  backgroundColor?: ViewStyle['backgroundColor'];
  containerStyle?: ViewStyle;
  textWrapperStyle?: TextStyle;
  textStyle?: ViewStyle;
  width?: number;
  onPress?: () => void;
};
