import {Box, VStack} from 'native-base';
import React from 'react';
import {colors} from '../../../common/colors';
import Avatar from '../../Avatar';
import Button from '../../Form/Buttons/Button';
import Text from '../../Text';
import ViewRate from '../../ViewRate';

export default function DoctorCard() {
  return (
    <Box
      p={3}
      style={{
        shadowColor: colors.border,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      }}
      bg={colors.white}
      borderRadius={'xl'}>
      <VStack space={2} alignItems={'center'} justifyContent={'center'}>
        <Avatar />
        <Text value="Osama Askar" size={'md'} family={'semi_bold'} />
        <Text value="Egypt-sohag-tahta" size={'sm'} family={'regular'} />
        <ViewRate rate={4} />
        <Button
          isLoading={false}
          isLoadingText={''}
          text="Appointment"
          style="outline"
        />
      </VStack>
    </Box>
  );
}
