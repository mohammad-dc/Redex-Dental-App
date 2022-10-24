import React from 'react';
import {Radio as NativeRadio} from 'native-base';

interface IRadioProps {
  value: string;
  label: string;
}
export default function Radio({value, label}: IRadioProps) {
  return <NativeRadio value={value}>{label}</NativeRadio>;
}
