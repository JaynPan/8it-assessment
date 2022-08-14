import React, { FC } from 'react';
import { Button, ScrollView, Image, View } from 'react-native';

import { MainStackNavProps } from '../../navigation/mainStack.params';
import banner from '../../../assets/banner.jpg';
import avatar from '../../../assets/avatar.jpg';
import { profileEditorStyles } from './styles';

export const ProfileEditor: FC<MainStackNavProps<'ProfileEditor'>> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={profileEditorStyles.bannerWrapper}>
        <Image source={banner} style={profileEditorStyles.banner} />
        <View style={profileEditorStyles.avatarWrapper}>
          <Image source={avatar} style={profileEditorStyles.avatar} />
        </View>
      </View>
      <Button
        onPress={() => {
          navigation.navigate('Profile');
        }}
        title="back"
      />
    </ScrollView>
  );
};
