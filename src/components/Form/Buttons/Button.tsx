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
  const is_outline = style === 'outline';
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
      borderWidth={'1px'}
      borderColor={is_primary || is_outline ? colors.dark_blue : colors.white}
      w={is_primary ? 'full' : is_outline ? 'full' : '1/2'}
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

              elevation: 50,
            }
          : {}
      }>
      <Text
        value={text}
        size={'xs'}
        color={is_primary ? 'white' : is_outline ? 'dark_blue' : 'black'}
        family={is_primary ? 'bold' : 'medium'}
      />
    </NativeButton>
  );
}
