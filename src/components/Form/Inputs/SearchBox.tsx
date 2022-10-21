import React from 'react';
import {FormControl, Icon, Input} from 'native-base';
import {IonicIcon} from '../../../common/icons';
import {colors} from '../../../common/colors';
import {ISearchBoxProps} from '../../../interfaces/components/inputs';

export default function SearchBox({
  hint,
  name,
  onChangeText,
  value,
}: ISearchBoxProps) {
  return (
    <FormControl
      w={{
        base: '80%',
        md: '25%',
      }}
      style={{
        shadowColor: colors.border,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      }}>
      <Input
        bg={colors.white}
        borderRadius={'xl'}
        borderColor={'transparent'}
        value={value}
        name={name}
        InputLeftElement={
          <Icon
            as={<IonicIcon name="search" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder={hint}
        onChangeText={e => onChangeText(e)}
      />
    </FormControl>
  );
}
