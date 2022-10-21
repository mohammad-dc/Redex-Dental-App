import {View, Text} from 'react-native';
import React from 'react';
import {Box, Center} from 'native-base';
import {colors} from '../common/colors';
import {IonicIcon} from '../common/icons';
import {INotificationIconBoxProps} from '../interfaces/components/box';

export default function NotificationIconBox({
  bg = 'green',
}: INotificationIconBoxProps) {
  return (
    <Box p={1} w={'45px'} h={'45px'} bg={colors[bg]} borderRadius={'xl'}>
      <Center w={'100%'} h={'100%'}>
        <IonicIcon
          name="notifications-outline"
          size={25}
          color={colors.white}
        />
      </Center>
    </Box>
  );
}
