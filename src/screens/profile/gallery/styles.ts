import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '../../../constants/layout';
import { GALLERY_NUMBERS_OF_COLUMNS } from '../constants';

export const galleryStyles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 8,
  },
  squareImage: {
    flex: 1,
    margin: 3,
    height: SCREEN_WIDTH / GALLERY_NUMBERS_OF_COLUMNS, // approximate a square,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 8,
  },
});

export const categoryStyles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  count: {
    color: 'rgb(250, 99, 99)',
    position: 'absolute',
    top: -4,
    right: -5,
    fontSize: 10,
  },
  bottomBorder: {
    position: 'absolute',
    bottom: 3,
    left: 0,
    height: 5,
    width: '80%',
    backgroundColor: 'rgb(250, 200, 99)',
    zIndex: -10,
  },
});
