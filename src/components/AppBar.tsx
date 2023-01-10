import {Box, Center} from 'native-base';
import React from 'react';
import {colors} from '../common/colors';
import Text from './Text';

export default function AppBar() {
  return (
    <Box w={'full'} bg={colors.dark_blue} p={3}>
      <Center>
        <Text
          value="My appointments"
          color="white"
          family="semi_bold"
          size="md"
        />
      </Center>
    </Box>
  );
}
