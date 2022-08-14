import { ImageSourcePropType } from 'react-native';

export enum CategoryEnum {
  dishAte,
  wannaTrys,
}

export type CategoryTextProps = {
  count: number;
};

export type Photo = {
  source?: ImageSourcePropType;
  id: number;
};
