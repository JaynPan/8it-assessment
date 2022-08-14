import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '../../../constants/layout';
import { BANNER_HEIGHT } from '../constants';

const CARD_HEIGHT = 150;
const HEIGHT_TO_COVER_BANNER = 30;
const AVATAR_DIAMETER = 90;

export const card = StyleSheet.create({
  shadow: {
    maxWidth: 500,
    width: SCREEN_WIDTH - 36,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: BANNER_HEIGHT - HEIGHT_TO_COVER_BANNER,
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  dummyContainer: {
    minHeight: CARD_HEIGHT,
  },
  avatar: {
    width: AVATAR_DIAMETER,
    height: AVATAR_DIAMETER,
    borderRadius: AVATAR_DIAMETER / 2,
    position: 'absolute',
    top: -(AVATAR_DIAMETER / 2.5),
    left: '50%',
    zIndex: 999,
    transform: [{ translateX: -(AVATAR_DIAMETER / 2) }],
  },
  usernameWrapper: {
    marginTop: 60,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  bio: {
    marginTop: 4,
    color: '#999',
    letterSpacing: 1.1,
  },
  followSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  pipe: {
    width: 1,
    height: 10,
    backgroundColor: '#aaa',
    marginHorizontal: 8,
  },
});
