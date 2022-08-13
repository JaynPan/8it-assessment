import React, { FC } from 'react';
import { Button, SafeAreaView } from 'react-native';

import { MainStackNavProps } from '../../navigation/mainStack.params';

export const ProfileEditor: FC<MainStackNavProps<'ProfileEditor'>> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        onPress={() => {
          navigation.navigate('Profile');
        }}
        title="back"
      />
    </SafeAreaView>
  );
};
