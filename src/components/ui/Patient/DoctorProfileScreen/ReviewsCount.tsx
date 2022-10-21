import React from 'react';
import {HStack} from 'native-base';
import {colors} from '../../../../common/colors';
import {AntDesignIcon} from '../../../../common/icons';
import Text from '../../../Text';

export default function ReviewsCount() {
  return (
    <HStack space={2} alignItems={'center'} justifyContent={'center'}>
      <AntDesignIcon name="star" color={colors.orange} size={13} />
      <Text value={'4.6 (2K reviews)'} size={'sm'} family={'regular'} />
    </HStack>
  );
}
