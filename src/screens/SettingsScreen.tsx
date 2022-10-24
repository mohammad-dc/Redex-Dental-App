import {ImageBackground} from 'react-native';
import React from 'react';
import {Box, Center, Spacer, VStack} from 'native-base';
import Text from '../components/Text';
import {settings} from '../static/app';
import IconLabel from '../components/IconLabel';
import IconLabelWrapper from '../components/IconLabelWrapper';

export default function SettingsScreen() {
  return (
    <Box w={'full'} h={'full'}>
      <ImageBackground
        source={require('../../assets/images/profile_bg.png')}
        style={{padding: 10, width: '100%', height: '110%'}}
        blurRadius={100}>
        <VStack>
          <Center>
            <Text value={'Settings'} family={'bold'} size={'lg'} />
          </Center>
          <Spacer h={10} />
          <VStack space={10}>
            <IconLabelWrapper />
          </VStack>
        </VStack>
      </ImageBackground>
    </Box>
  );
}
