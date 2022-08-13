import React, { FC } from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MainStackNavProps } from '../../navigation/mainStack.params';
import banner from '../../../assets/banner.jpg';
import { generalStyles } from './styles';
import { BANNER_HEIGHT, BANNER_WIDTH } from './constants';
import { Card } from './card';

export const Profile: FC<MainStackNavProps<'Profile'>> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={generalStyles.container}>
      <TouchableOpacity style={[{ top: insets.top + 5 }, generalStyles.settingsWrapper]}>
        <Ionicons name="settings-outline" size={24} color="#888" />
      </TouchableOpacity>
      <Image source={banner} style={{ width: BANNER_WIDTH, height: BANNER_HEIGHT }} />
      <Card navigation={navigation} />
    </ScrollView>
  );
};
