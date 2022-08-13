import React, { FC } from 'react';
import { Image, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MainStackNavProps } from '../../navigation/mainStack.params';
import banner from '../../../assets/banner.jpg';
import avatar from '../../../assets/avatar.jpg';
import { generalStyles, card } from './styles';
import { BANNER_HEIGHT, BANNER_WIDTH } from './constants';

export const Profile: FC<MainStackNavProps<'Profile'>> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const navigateToProfileEditorScreen = () => {
    navigation.navigate('ProfileEditor');
  };

  return (
    <ScrollView contentContainerStyle={generalStyles.container}>
      <TouchableOpacity style={[{ top: insets.top + 5 }, generalStyles.settingsWrapper]}>
        <Ionicons name="settings-outline" size={24} color="#888" />
      </TouchableOpacity>
      <Image source={banner} style={{ width: BANNER_WIDTH, height: BANNER_HEIGHT }} />
      {/* the rounded border should also apply overflow: hidden, result in shadow not showing
          the trick is to make two views
        */}
      <View style={card.shadow}>
        <Image source={avatar} style={card.avatar} />
        <BlurView style={card.container}>
          <TouchableOpacity style={card.usernameWrapper} onPress={navigateToProfileEditorScreen}>
            <Text style={card.username}>Christopher H.</Text>
          </TouchableOpacity>
          <Text style={card.bio}>Find me on Pikadish!</Text>
          <View style={card.followSection}>
            <Text>11 Follower</Text>
            <View style={card.pipe} />
            <Text>25 Following</Text>
            <View style={card.pipe} />
            <Text>9 Friend</Text>
          </View>
        </BlurView>
      </View>
      <View style={card.dummyContainer} />
    </ScrollView>
  );
};
