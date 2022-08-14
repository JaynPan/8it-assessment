import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '../../constants/layout';
import { PROFILE_EDITOR_BANNER_HEIGHT } from './constants';

const AVATAR_DIAMETER = 100;
const MARGIN_HORIZONTAL = 30;

export const profileEditorStyles = StyleSheet.create({
  bannerWrapper: {
    overflow: 'visible',
  },
  banner: {
    width: SCREEN_WIDTH,
    height: PROFILE_EDITOR_BANNER_HEIGHT,
  },
  avatarWrapper: {
    position: 'absolute',
    bottom: -(AVATAR_DIAMETER / 3),
    left: 30,
    zIndex: 999,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  avatar: {
    width: AVATAR_DIAMETER,
    height: AVATAR_DIAMETER,
    borderRadius: 10,
  },
  form: {
    marginHorizontal: MARGIN_HORIZONTAL,
    marginTop: 60,
  },
});
