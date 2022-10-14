import {View, Text} from 'react-native';
import React from 'react';
import {Center, Image} from 'native-base';

export default function Logo() {
  return (
    <Center>
      <Image
        source={require('../../assets/images/logo.png')}
        alt="Alternate Text"
        size="lg"
      />
    </Center>
  );
}
