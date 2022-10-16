import {FormControl, Input} from 'native-base';
import React from 'react';
import {colors} from '../../../common/colors';
import {ISmallInputBoxProps} from '../../../interfaces/components/inputs';

export default function SmallInputBox({
  isInvalid = false,
  onChangeText,
  onBlur,
  value,
  name,
}: ISmallInputBoxProps) {
  return (
    <FormControl isInvalid={isInvalid} w="50px" h={'50px'}>
      <Input
        onChangeText={e => onChangeText(e)}
        onBlur={e => onBlur(e)}
        value={value}
        name={name}
        borderRadius={'xl'}
        borderColor={'transparent'}
        bg={colors.white}
        type={'text'}
        size={'xl'}
        fontWeight="bold"
        textAlign={'center'}
      />
    </FormControl>
  );
}
