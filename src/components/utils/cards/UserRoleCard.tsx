import React from 'react';
import {Box, Center, HStack, Image, VStack} from 'native-base';
import Text from '../../Text';
import {AntDesignIcon} from '../../../common/icons';
import {colors} from '../../../common/colors';
import {IUserRoleCardProps} from '../../../interfaces/components/cards';

export default function UserRoleCard({src, label}: IUserRoleCardProps) {
  return (
    <Box
      px={2}
      py={4}
      borderRadius={'xl'}
      bg={colors.white}
      style={{
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 24,
      }}>
      <Center>
        <VStack space={3}>
          <Image source={src} h={120} maxW={160} alt={label} />
          <HStack alignItems={'center'} justifyContent={'center'} space={2}>
            <Text value={label} size="sm" />
            <AntDesignIcon
              name={'arrowright'}
              size={20}
              color={colors.dark_blue}
            />
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
}
