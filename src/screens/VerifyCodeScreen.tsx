import React from 'react';
import {Box, HStack, ScrollView, VStack} from 'native-base';
import {colors} from '../common/colors';
import HeaderTitle from '../components/HeaderTitle';
import Text from '../components/Text';
import VerificationCodeForm from '../components/Form/VerificationCodeForm';

export default function VerifyCodeScreen() {
  return (
    <ScrollView w={'full'} h={'full'}>
      <Box p={4} bg={colors.bg_gray} h={'full'}>
        <VStack space={5}>
          <HeaderTitle heading="Verification Code" />
          <HStack space={2}>
            <Text
              value="Enter the code that sent to"
              size={'sm'}
              family={'regular'}
            />
            <Text
              value={'+201015293997'}
              size={'sm'}
              family={'regular'}
              color={'orange'}
            />
          </HStack>
          <VerificationCodeForm />
        </VStack>
      </Box>
    </ScrollView>
  );
}
