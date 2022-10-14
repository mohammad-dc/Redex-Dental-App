import {Text as NativeText} from 'native-base';
import React from 'react';
import {colors} from '../common/colors';
import {fonts} from '../common/fonts';
import {ITextProps} from '../interfaces/components/text';

export default function Text({
  color = 'black',
  family = 'regular',
  size = 'md',
  value,
}: ITextProps) {
  return (
    <NativeText
      color={colors[color]}
      fontSize={size}
      fontFamily={fonts[family]}>
      {value}
    </NativeText>
  );
}
