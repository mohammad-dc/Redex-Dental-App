import {Button as NativeButton} from 'native-base';
import React from 'react';
import {colors} from '../../../common/colors';
import {IButtonProps} from '../../../interfaces/components/button';
import Text from '../../Text';

export default function Button({
  isLoading = false,
  isLoadingText,
  text,
  style = 'normal',
  onPress = () => null,
}: IButtonProps) {
  const is_primary = style === 'primary';
  return (
    <NativeButton
      title="submit"
      onPress={e => onPress(e)}
      rounded={'xl'}
      _hover={{opacity: 0.4}}
      py={3}
      isLoading={isLoading}
      isLoadingText={isLoadingText}
      bg={is_primary ? colors.dark_blue : colors.white}
      border={`1px solid ${colors.dark_blue}`}
      w={is_primary ? 'full' : '1/2'}
      style={
        is_primary
          ? {
              shadowColor: colors.dark_blue,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,

              elevation: 9,
            }
          : {}
      }>
      <Text
        value={text}
        color={is_primary ? 'white' : 'black'}
        family={is_primary ? 'bold' : 'medium'}
      />
    </NativeButton>
  );
}
