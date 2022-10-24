import React from 'react';
import {Radio as NativeRadio, Stack} from 'native-base';
import Radio from './Radio';

interface IRadioGroupProps {
  defaultValue: string;
  name: string;
  label: string;
  direction: 'column' | 'row';
  options: {id: number; label: string; value: string}[];
}
export default function RadioGroup({
  defaultValue,
  name,
  label,
  direction = 'row',
  options,
}: IRadioGroupProps) {
  return (
    <NativeRadio.Group
      defaultValue={defaultValue}
      name={name}
      accessibilityLabel={label}>
      <Stack space={2} direction={direction} alignItems={'center'}>
        {options.map(el => (
          <Radio key={el.id} value={el.value} label={el.label} />
        ))}
      </Stack>
    </NativeRadio.Group>
  );
}
