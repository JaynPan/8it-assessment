import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '../../constants/layout';
import { BANNER_HEIGHT } from './constants';

export const generalStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  settingsWrapper: {
    position: 'absolute',
    right: 15,
    zIndex: 999,
  },
  banner: {
    width: SCREEN_WIDTH,
    height: BANNER_HEIGHT,
  },
});
