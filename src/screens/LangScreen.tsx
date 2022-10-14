import React from 'react';
import {Box, Center, HStack, Spacer, VStack} from 'native-base';
import Logo from '../components/Logo';
import Text from '../components/Text';
import Button from '../components/Form/Buttons/Button';
import {colors} from '../common/colors';

export default function LangScreen() {
  return (
    <Box p={5} bg={colors.bg_gray} h={'full'} mt={'20%'}>
      <VStack alignItems={'center'}>
        <Logo />
        <Spacer h={4} />
        <Text value="Select Language" />
        <Spacer h={6} />
        <HStack space={3}>
          <Button text="English" />
          <Button text="العربية" />
        </HStack>
        <Spacer h={8} />
        <Button text="Continue" style="primary" />
      </VStack>
    </Box>
  );
}
