import React, { FC } from 'react';
import { Button, SafeAreaView } from 'react-native';

import { MainStackNavProps } from '../../navigation/mainStack.params';

export const Profile: FC<MainStackNavProps<'Profile'>> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        onPress={() => {
          navigation.navigate('ProfileEditor');
        }}
        title="go"
      />
    </SafeAreaView>
  );
};
