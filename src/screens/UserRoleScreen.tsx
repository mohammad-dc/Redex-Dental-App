import {View, Text} from 'react-native';
import React from 'react';
import {Box, HStack, Spacer, VStack} from 'native-base';
import {colors} from '../common/colors';
import Logo from '../components/Logo';
import UserRoleCard from '../components/utils/cards/UserRoleCard';
import Button from '../components/Form/Buttons/Button';
import BackNavigatorButton from '../components/Form/Buttons/BackNavigatorButton';

export default function UserRoleScreen() {
  return (
    <Box bg={colors.bg_gray} h={'full'} p={5}>
      <VStack space={5}>
        <BackNavigatorButton />
        <Logo />
        <HStack justifyContent={'space-between'} alignItems="center">
          <UserRoleCard
            src={require('../../assets/images/patient.png')}
            label="Patient"
          />
          <UserRoleCard
            src={require('../../assets/images/doctor.png')}
            label="Doctor"
          />
        </HStack>
        <Spacer h={4} />
        <Button text="Continue" style="primary" />
      </VStack>
    </Box>
  );
}
