import { Dimensions } from 'react-native';

// 3:2 width-height aspect ratio
export const BANNER_WIDTH = Dimensions.get('window').width;
export const BANNER_HEIGHT = (BANNER_WIDTH / 3) * 2;
