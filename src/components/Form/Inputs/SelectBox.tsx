import {View, Text} from 'react-native';
import React from 'react';
import {CheckIcon, FormControl, Select, WarningOutlineIcon} from 'native-base';
import {colors} from '../../../common/colors';
import {ISelectBoxProps} from '../../../interfaces/components/inputs';

export default function SelectBox({
  isInvalid = false,
  label,
  hint,
  error,
  name,
  value,
  options,
  bg = 'white',
}: ISelectBoxProps) {
  return (
    <FormControl w="full" isInvalid={isInvalid}>
      <FormControl.Label>{label}</FormControl.Label>
      <Select
        borderRadius={'xl'}
        borderColor={'transparent'}
        bg={colors[bg]}
        minWidth="200"
        accessibilityLabel={hint}
        placeholder={hint}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size={5} />,
        }}
        mt="1">
        {options.map((el, index) => (
          <Select.Item key={index} label={el.label} value={el.value} />
        ))}
      </Select>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
