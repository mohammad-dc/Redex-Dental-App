import React from 'react';
import {Box, HStack} from 'native-base';
import BackNavigatorButton from './Form/Buttons/BackNavigatorButton';
import Text from './Text';
import {IHeaderTitleProps} from '../interfaces/components/header';

export default function HeaderTitle({heading}: IHeaderTitleProps) {
  return (
    <HStack justifyContent={'space-between'} alignItems={'center'} space={10}>
      <BackNavigatorButton />
      <Text value={heading} family="bold" size="lg" />
      <Box></Box>
    </HStack>
  );
}
