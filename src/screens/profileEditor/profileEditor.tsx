import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { MainStackNavProps } from '../../navigation/mainStack.params';
import { TextInput } from '../../components/textInput';
import banner from '../../../assets/banner.jpg';
import avatar from '../../../assets/avatar.jpg';
import { useWhoAmI } from '../../contexts/whoAmI';
import { profileEditorStyles } from './styles';

export const ProfileEditor: FC<MainStackNavProps<'ProfileEditor'>> = ({ navigation }) => {
  const { userInfo, handleUserInfoOnChange } = useWhoAmI();
  const { handleName, bio, location } = userInfo;

  return (
    <KeyboardAwareScrollView>
      <View style={profileEditorStyles.bannerWrapper}>
        <Image source={banner} style={profileEditorStyles.banner} />
        <View style={profileEditorStyles.avatarWrapper}>
          <Image source={avatar} style={profileEditorStyles.avatar} />
        </View>
      </View>
      <View style={profileEditorStyles.form}>
        <TextInput label="Handle Name" value={handleName} onChangeText={handleUserInfoOnChange('handleName')} />
        <TextInput label="Bio" value={bio} onChangeText={handleUserInfoOnChange('bio')} />
        <TextInput label="Location" value={location} onChangeText={handleUserInfoOnChange('location')} />
      </View>
    </KeyboardAwareScrollView>
  );
};
