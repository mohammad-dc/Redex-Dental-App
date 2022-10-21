import React from 'react';
import {HStack} from 'native-base';
import Avatar from '../../../Avatar';
import Text from '../../../Text';

export default function UserShortcut() {
  return (
    <HStack space={3} alignItems={'center'}>
      <Avatar />
      <Text color="white" value="Hi, Osama" family="bold" size={'md'} />
    </HStack>
  );
}
