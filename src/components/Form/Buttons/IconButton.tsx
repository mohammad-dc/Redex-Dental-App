import React from 'react';
import {IconButton as NativeIconButton} from 'native-base';
import {IonicIcon, MaterialIcon} from '../../../common/icons';
import {colors} from '../../../common/colors';

export default function IconButton() {
  return (
    <NativeIconButton
      borderRadius={'xl'}
      bg={colors.white}
      size={'lg'}
      variant="solid"
      _icon={{
        as: IonicIcon,
        name: 'md-filter',
        color: colors.border,
      }}
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
    />
  );
}
