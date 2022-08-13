import React, { FC } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MainStackNavProps } from '../../navigation/mainStack.params';
import banner from '../../../assets/banner.jpg';
import { generalStyles } from './styles';
import { Card } from './card';
import { Gallery } from './gallery';

export const Profile: FC<MainStackNavProps<'Profile'>> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={generalStyles.container}>
        <TouchableOpacity style={[{ top: insets.top + 5 }, generalStyles.settingsWrapper]}>
          <Ionicons name="settings-outline" size={24} color="#888" />
        </TouchableOpacity>
        <Image source={banner} style={generalStyles.banner} />
        <Card navigation={navigation} />
      </View>
      <Gallery />
    </>
  );
};
