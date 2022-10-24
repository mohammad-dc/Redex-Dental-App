import React from 'react';
import {HStack, VStack} from 'native-base';
import Avatar from '../../Avatar';
import Text from '../../Text';

export default function UserChat() {
  return (
    <HStack py={3} alignItems={'center'} justifyContent={'space-between'}>
      <HStack space={2} alignItems={'center'}>
        <Avatar size="md" />
        <VStack space={1} justifyContent={'flex-start'}>
          <Text size={'sm'} value={'Ayman Ali'} family={'medium'} />
          <Text
            value={'Hello oasama how are you'}
            family={'regular'}
            size={'sm'}
            color={'border'}
          />
        </VStack>
      </HStack>
      <Text value={'14:44'} family={'regular'} size={'sm'} color={'border'} />
    </HStack>
  );
}
