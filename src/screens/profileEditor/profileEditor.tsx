import React, { FC } from 'react';
import { Button, ScrollView, Image, View } from 'react-native';

import { MainStackNavProps } from '../../navigation/mainStack.params';
import { TextInput } from '../../components/textInput';
import banner from '../../../assets/banner.jpg';
import avatar from '../../../assets/avatar.jpg';
import { useWhoAmI } from '../../contexts/whoAmI';
import { profileEditorStyles } from './styles';

export const ProfileEditor: FC<MainStackNavProps<'ProfileEditor'>> = ({ navigation }) => {
  const { handleName, bio, location } = useWhoAmI();

  return (
    <ScrollView>
      <View style={profileEditorStyles.bannerWrapper}>
        <Image source={banner} style={profileEditorStyles.banner} />
        <View style={profileEditorStyles.avatarWrapper}>
          <Image source={avatar} style={profileEditorStyles.avatar} />
        </View>
      </View>
      <View style={profileEditorStyles.form}>
        <TextInput label="Handle Name" value={handleName} />
        <TextInput label="Bio" value={bio} />
        <TextInput label="Location" value={location} />
      </View>
    </ScrollView>
  );
};
