import React, { FC, useState } from 'react';
import { FlatList, Image, ListRenderItem, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import salad from '../../../../assets/salad.jpg';
import cake from '../../../../assets/cake.jpg';
import { GALLERY_NUMBERS_OF_COLUMNS } from '../constants';
import { categoryStyles, galleryStyles } from './styles';
import { CategoryEnum, CategoryTextProps, Photo } from './types';
import { fillUpRowWithPhotos } from './utils';

const dishAtePhotos = Array.from({ length: 19 }).map((_, i) => ({ source: salad, id: i }));
const wannaTrysPhotos = Array.from({ length: 30 }).map((_, i) => ({ source: cake, id: i }));
const photos = {
  [CategoryEnum.dishAte]: fillUpRowWithPhotos(dishAtePhotos),
  [CategoryEnum.wannaTrys]: fillUpRowWithPhotos(wannaTrysPhotos),
};

export const Gallery: FC = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryEnum>(CategoryEnum.dishAte);

  const pressCategory = (type: CategoryEnum) => () => {
    setCurrentCategory(type);
  };

  const renderItem: ListRenderItem<Photo> = ({ item }) => {
    if (!item.source) {
      return <View style={[galleryStyles.squareImage, galleryStyles.invisibleItem]} />;
    }

    return <Image source={item.source} style={galleryStyles.squareImage} />;
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
      renderItem={renderItem}
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
