import {View, Text} from 'react-native';
import React from 'react';
import {Box, Icon} from 'native-base';
import {colors} from '../../../common/colors';
import {AntDesignIcon} from '../../../common/icons';

export default function BackNavigatorButton() {
  return (
    <Box bg={colors.white} p={'1.5'} borderRadius={'xl'} maxW={'40px'}>
      <AntDesignIcon name="arrowleft" size={25} />
    </Box>
  );
}
