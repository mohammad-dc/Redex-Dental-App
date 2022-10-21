import React from 'react';
import {Box, HStack, FlatList, VStack} from 'native-base';
import Text from '../../../../../Text';
import Review from './Review';

export default function ReviewsTab() {
  return (
    <Box h={'full'}>
      <VStack space={2}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Text size={'sm'} value={'(15 reviews)'} />
          <Text size={'sm'} value={'Add your review'} color={'light_blue'} />
        </HStack>
        <Box h={'60%'}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            keyExtractor={item => item.toString()}
            renderItem={() => <Review />}
          />
        </Box>
      </VStack>
    </Box>
  );
}
