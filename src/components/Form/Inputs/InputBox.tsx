import {
  FormControl,
  Icon,
  Input,
  Pressable,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';
import {colors} from '../../../common/colors';
import {MaterialIcon} from '../../../common/icons';
import {IInputBoxProps} from '../../../interfaces/components/inputs';

export default function InputBox({
  isInvalid = false,
  label,
  hint,
  secure = false,
  type = 'text',
  error,
  name,
  value,
  onChangeText,
  onBlur,
}: IInputBoxProps) {
  const [show, setShow] = React.useState(false);
  return (
    <FormControl isInvalid={isInvalid} w="full">
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        onChangeText={e => onChangeText(e)}
        onBlur={e => onBlur(e)}
        value={value}
        name={name}
        borderRadius={'xl'}
        borderColor={'transparent'}
        bg={colors.white}
        placeholder={hint}
        type={secure ? (show ? 'text' : 'password') : type}
        InputRightElement={
          secure ? (
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcon name={show ? 'visibility' : 'visibility-off'} />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          ) : (
            <Text></Text>
          )
        }
      />

      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
