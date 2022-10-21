import {Box, HStack, VStack} from 'native-base';
import React from 'react';
import {colors} from '../../../../../common/colors';
import {IonicIcon} from '../../../../../common/icons';
import IconButton from '../../../../Form/Buttons/IconButton';
import SearchBox from '../../../../Form/Inputs/SearchBox';
import UserShortcut from '../UserShortcut';

export default function AppBar() {
  return (
    <Box
      borderBottomRadius={'3xl'}
      h={'120px'}
      bg={colors.dark_blue}
      w={'full'}
      p={3}
      zIndex={99}>
      <VStack space={6} mt={'10px'}>
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <UserShortcut />
          <IonicIcon
            name="notifications-outline"
            size={25}
            color={colors.white}
          />
        </HStack>
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <SearchBox
            hint={'Search doctor'}
            name="search"
            onChangeText={e => null}
            value=""
          />
          <IconButton />
        </HStack>
      </VStack>
    </Box>
  );
}
