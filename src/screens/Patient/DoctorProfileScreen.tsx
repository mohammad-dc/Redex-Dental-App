import React from 'react';
import {Box, Fab, HStack, Icon, VStack} from 'native-base';
import {colors} from '../../common/colors';
import BackNavigatorButton from '../../components/Form/Buttons/BackNavigatorButton';
import DoctorInfo from '../../components/ui/Patient/DoctorProfileScreen/DoctorInfo';
import {AntDesignIcon, OctIcon} from '../../common/icons';
import ReviewsCount from '../../components/ui/Patient/DoctorProfileScreen/ReviewsCount';
import Tabs from '../../components/ui/Patient/DoctorProfileScreen/Tabs';

export default function DoctorProfileScreen() {
  return (
    <Box w={'full'} h={'full'} position="relative" bg={colors.bg_gray}>
      <VStack space={3}>
        <Box p={3}>
          <BackNavigatorButton />
        </Box>
        <HStack
          p={3}
          space={3}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <DoctorInfo />
          <VStack space={7} justifyContent={'center'} alignItems={'center'}>
            <OctIcon name="report" size={20} />
            <ReviewsCount />
          </VStack>
        </HStack>
        <Box
          p={3}
          h={'full'}
          bg={colors.white}
          borderTopRadius={'2xl'}
          style={{
            shadowColor: colors.border,
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.5,
            shadowRadius: 12.35,

            elevation: 19,
          }}>
          <Tabs />
        </Box>
      </VStack>

      <Fab
        position="absolute"
        size="sm"
        bg={colors.orange}
        icon={
          <Icon
            color="white"
            as={<AntDesignIcon name="message1" />}
            size="md"
          />
        }
      />
    </Box>
  );
}
