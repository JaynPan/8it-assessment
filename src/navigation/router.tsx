import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MaineStack } from './mainStack';

export const Router: FC = () => {
  return (
    <NavigationContainer>
      <MaineStack />
    </NavigationContainer>
  );
};
