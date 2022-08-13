import React, { FC, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import salad from '../../../../assets/salad.jpg';
import cake from '../../../../assets/cake.jpg';
import { GALLERY_NUMBERS_OF_COLUMNS } from '../constants';
import { categoryStyles, galleryStyles } from './styles';
import { CategoryEnum, CategoryTextProps } from './types';

const dishAtePhotos = Array.from({ length: 19 }).map((_, i) => ({ source: salad, id: i }));
const wannaTrysPhotos = Array.from({ length: 30 }).map((_, i) => ({ source: cake, id: i }));
const photos = {
  [CategoryEnum.dishAte]: dishAtePhotos,
  [CategoryEnum.wannaTrys]: wannaTrysPhotos,
};

export const Gallery: FC = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryEnum>(CategoryEnum.dishAte);

  const pressCategory = (type: CategoryEnum) => () => {
    setCurrentCategory(type);
  };

  return (
    <FlatList
      ListHeaderComponent={
        <View style={galleryStyles.listHeader}>
          <TouchableOpacity onPress={pressCategory(CategoryEnum.dishAte)}>
            <CategoryText count={dishAtePhotos.length}>Dish Ate</CategoryText>
          </TouchableOpacity>
          <TouchableOpacity onPress={pressCategory(CategoryEnum.wannaTrys)}>
            <CategoryText count={wannaTrysPhotos.length}>Wanna Trys</CategoryText>
          </TouchableOpacity>
        </View>
      }
      data={photos[currentCategory]}
      numColumns={GALLERY_NUMBERS_OF_COLUMNS}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={galleryStyles.contentContainer}
      renderItem={({ item }) => <Image source={item.source} style={galleryStyles.squareImage} />}
    />
  );
};

export const CategoryText: FC<CategoryTextProps> = ({ children, count }) => {
  return (
    <View style={{ overflow: 'visible' }}>
      <Text style={categoryStyles.count}>{count}</Text>
      <Text style={{ position: 'relative' }}>
        <Text style={categoryStyles.text}>{children}</Text>
      </Text>
      <Text style={categoryStyles.bottomBorder} />
    </View>
  );
};
