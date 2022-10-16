import {Formik} from 'formik';
import {Box, Center, ScrollView, VStack} from 'native-base';
import React from 'react';
import {colors} from '../common/colors';
import RegisterForm from '../components/Form/RegisterForm';
import HeaderTitle from '../components/HeaderTitle';
import Text from '../components/Text';

export default function SignUpScreen() {
  return (
    <ScrollView w={'full'} h={'full'}>
      <Box p={4} bg={colors.bg_gray} h={'full'}>
        <VStack space={5}>
          <HeaderTitle heading="Let's Register" />
          <Center>
            {' '}
            <Text value="Create New Account!" size={'lg'} family="bold" />
          </Center>
          <RegisterForm />
        </VStack>
      </Box>
    </ScrollView>
  );
}
