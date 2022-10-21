import React from 'react';
import {Box, HStack, VStack} from 'native-base';
import {colors} from '../../../common/colors';
import NotificationIconBox from '../../NotificationIconBox';
import Text from '../../Text';

export default function NotificationCard() {
  return (
    <Box
      p={5}
      bg={colors.white}
      borderRadius={'xl'}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 23,
      }}>
      <HStack justifyContent={'flex-start'} space={1} maxW={'90%'}>
        <NotificationIconBox />
        <VStack space={1}>
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Text value={'From Dr.Osama'} family={'semi_bold'} />
            <Text value={'2 Min'} family={'regular'} size={'sm'} />
          </HStack>
          <Text
            size={'sm'}
            value="A doctor is someone who is experienced and certified to practice medicine to help"
          />
        </VStack>
      </HStack>
    </Box>
  );
}
