import {Avatar as NativeAvatar} from 'native-base';
import React from 'react';
import {colors} from '../common/colors';
import {IAvatarProps} from '../interfaces/components/avatar';

export default function Avatar({size = 'md', border = true}: IAvatarProps) {
  return (
    <NativeAvatar
      borderWidth={2}
      borderColor={border ? colors.white : 'transparent'}
      bg={colors.green}
      size={size}
      source={{
        uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      }}>
      <NativeAvatar.Badge bg={colors.green} />
    </NativeAvatar>
  );
}
