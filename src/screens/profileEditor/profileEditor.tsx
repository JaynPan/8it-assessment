import React, { FC, useState } from 'react';
import { Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { MainStackNavProps } from '../../navigation/mainStack.params';
import { TextInput } from '../../components/textInput';
import banner from '../../../assets/banner.jpg';
import avatar from '../../../assets/avatar.jpg';
import { useWhoAmI, WhoAmIContextState } from '../../contexts/whoAmI';
import { Button } from '../../components/button';

import { profileEditorStyles } from './styles';

export const ProfileEditor: FC<MainStackNavProps<'ProfileEditor'>> = ({ navigation }) => {
  const { userInfo, saveUserInfoToSecureStore } = useWhoAmI();
  const [unsavedUserInfo, setUnsavedUserInfo] = useState(userInfo);
  const { handleName, bio, location, gender, birthDate } = unsavedUserInfo;

  const handleUnSavedUserInfoOnChange = (key: keyof WhoAmIContextState['userInfo']) => (value: string) => {
    setUnsavedUserInfo((prev) => {
      const newState = { ...prev };
      newState[key] = value;
      return newState;
    });
  };

  const save = async () => {
    await saveUserInfoToSecureStore(unsavedUserInfo);
    navigation.navigate('Profile');
  };

  return (
    <KeyboardAwareScrollView>
      <View style={profileEditorStyles.bannerWrapper}>
        <Image source={banner} style={profileEditorStyles.banner} />
        <View style={profileEditorStyles.avatarWrapper}>
          <Image source={avatar} style={profileEditorStyles.avatar} />
        </View>
      </View>
      <View style={profileEditorStyles.form}>
        <TextInput label="Handle Name" value={handleName} onChangeText={handleUnSavedUserInfoOnChange('handleName')} />
        <TextInput label="Bio" value={bio} onChangeText={handleUnSavedUserInfoOnChange('bio')} />
        <TextInput label="Location" value={location} onChangeText={handleUnSavedUserInfoOnChange('location')} />
        <TextInput label="Gender" value={gender} onChangeText={handleUnSavedUserInfoOnChange('gender')} />
        <TextInput label="Birth Date" value={birthDate} onChangeText={handleUnSavedUserInfoOnChange('birthDate')} />
        <Button onPress={save} width={250} containerStyle={{ marginVertical: 40 }}>
          Save
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};
