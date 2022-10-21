import {Box, ScrollView, VStack} from 'native-base';
import React from 'react';
import {ImageBackground} from 'react-native';
import Avatar from '../components/Avatar';
import AccountForm from '../components/Form/AccountForm';
import HeaderTitle from '../components/HeaderTitle';
import Text from '../components/Text';

export default function AccountScreen() {
  return (
    <ScrollView w={'full'} h={'full'}>
      <Box h={'full'}>
        <ImageBackground
          style={{width: '100%', height: '110%'}}
          source={require('../../assets/images/profile_bg.png')}
          resizeMode={'cover'}>
          <VStack space={3} p={3}>
            <HeaderTitle heading="My Account" />
            <VStack space={3} alignItems={'center'}>
              <Avatar size="lg" />
              <Text value="Mai Alaa" family="semi_bold" size="md" />
            </VStack>
            <AccountForm />
          </VStack>
        </ImageBackground>
      </Box>
    </ScrollView>
  );
}
