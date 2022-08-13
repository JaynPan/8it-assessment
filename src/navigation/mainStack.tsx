import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Profile } from '../screens/profile';
import { ProfileEditor } from '../screens/profileEditor';

const Stack = createStackNavigator();

export const MaineStack: FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="ProfileEditor" component={ProfileEditor} />
  </Stack.Navigator>
);
