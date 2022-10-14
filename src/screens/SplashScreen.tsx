import {View, Text} from 'react-native';
import React from 'react';
import {Box, Center, Image} from 'native-base';
import {colors} from '../common/colors';

export default function SplashScreen() {
  return (
    <Box height={'full'}>
      <Center px={4} flex={1}>
        <Image
          source={require('../../assets/images/logo.png')}
          alt="Alternate Text"
          size="xl"
        />
      </Center>
    </Box>
  );
}
