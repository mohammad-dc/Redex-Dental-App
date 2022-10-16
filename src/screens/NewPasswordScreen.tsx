import {Box, ScrollView, VStack} from 'native-base';
import React from 'react';
import {colors} from '../common/colors';
import NewPasswordForm from '../components/Form/NewPasswordForm';
import HeaderTitle from '../components/HeaderTitle';
import Text from '../components/Text';

export default function NewPasswordScreen() {
  return (
    <ScrollView w={'full'} h={'full'}>
      <Box p={4} bg={colors.bg_gray} h={'full'}>
        <VStack space={5}>
          <HeaderTitle heading="New Password" />
          <Text value="Enter new password" size={'sm'} family={'regular'} />

          <NewPasswordForm />
        </VStack>
      </Box>
    </ScrollView>
  );
}
