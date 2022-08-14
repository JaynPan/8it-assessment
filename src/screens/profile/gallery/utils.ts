import { GALLERY_NUMBERS_OF_COLUMNS } from '../constants';
import { Photo } from './types';

// To fill up the last row with 3 items
// if there is only 1 or 2 item for example, the remained flex box will grow, which is not align to the above row
export const fillUpRowWithPhotos = (array: Photo[]): Photo[] => {
  const fillUpCount = GALLERY_NUMBERS_OF_COLUMNS - (array.length % GALLERY_NUMBERS_OF_COLUMNS);

  for (let i = 0; i < fillUpCount; i++) {
    array.push({ id: array.length + i });
  }

  return array;
};
