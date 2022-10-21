import {Box, HStack, VStack} from 'native-base';
import React from 'react';
import {colors} from '../../../../../../common/colors';
import Avatar from '../../../../../Avatar';
import Text from '../../../../../Text';
import ViewRate from '../../../../../ViewRate';

export default function Review() {
  return (
    <Box py={2} borderBottomWidth={'0.3'} borderBottomColor={colors.bg_gray}>
      <HStack justifyContent={'space-between'}>
        <HStack justifyContent={'flex-start'} space={1}>
          <Avatar size={'sm'} />
          <VStack space={2}>
            <Text value="May Alaa" size={'sm'} family={'regular'} />
            <ViewRate rate={3} size={12} />
            <Text
              value={'Amazing doctor thanks for him'}
              size={'sm'}
              family={'regular'}
            />
          </VStack>
        </HStack>
        <Text
          value="9/5/2022"
          size={'sm'}
          family={'regular'}
          color={'border'}
        />
      </HStack>
    </Box>
  );
}
