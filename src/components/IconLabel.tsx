import React from 'react';
import {HStack} from 'native-base';
import {MaterialIcon} from '../common/icons';
import {IIconLabelProps} from '../interfaces/components/icons';
import Text from './Text';
import {colors} from '../common/colors';

export default function IconLabel({
  label,
  name,
  size = 24,
  color = 'black',
}: IIconLabelProps) {
  return (
    <HStack space={2} justifyContent={'flex-start'} alignItems={'center'}>
      <MaterialIcon name={name} size={size} color={colors[color]} />
      <Text value={label} size={'sm'} family={'regular'} color={color} />
    </HStack>
  );
}
