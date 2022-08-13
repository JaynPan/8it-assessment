import { Dimensions } from 'react-native';

// 3:2 width-height aspect ratio
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const BANNER_HEIGHT = (SCREEN_WIDTH / 3) * 2;
export const GALLERY_NUMBERS_OF_COLUMNS = 3;
