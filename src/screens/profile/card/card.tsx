import React, { FC } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

import avatar from '../../../../assets/avatar.jpg';
import { card } from './styles';
import { CardProps } from './types';

export const Card: FC<CardProps> = ({ navigation }) => {
  const navigateToProfileEditorScreen = () => {
    navigation.navigate('ProfileEditor');
  };

  return (
    <>
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
    </>
  );
};
