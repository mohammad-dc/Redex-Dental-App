import React from 'react';
import {Box, HStack, VStack} from 'native-base';
import Avatar from '../../../Avatar';
import Text from '../../../Text';

export default function DoctorInfo() {
  return (
    <Box>
      <HStack space={1} justifyContent={'flex-start'}>
        <Avatar size={'lg'} border={false} />
        <VStack space={1}>
          <Text value={'Basher Askar'} size={'lg'} family={'semi_bold'} />
          <Text value={'Egypt-sohag-tahta'} size={'sm'} family={'regular'} />
          <Text value={'+201015293997'} size={'sm'} family={'regular'} />
        </VStack>
      </HStack>
    </Box>
  );
}
