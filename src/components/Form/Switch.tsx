import React from 'react';
import {Switch as NativeSwitch} from 'native-base';

interface ISwitchProps {
  checked: boolean;
}
export default function Switch({checked}: ISwitchProps) {
  return <NativeSwitch defaultIsChecked={checked} colorScheme="primary" />;
}
