import React from 'react';
import {Box, HStack, VStack} from 'native-base';
import {langs, settings} from '../static/app';
import IconLabel from './IconLabel';
import RadioGroup from './Form/Radio/RadioGroup';
import Switch from './Form/Switch';

export default function IconLabelWrapper() {
  return (
    <VStack space={10}>
      {settings.map((el, i) => (
        <HStack space={'1/4'} alignItems={'center'}>
          <IconLabel
            key={el.id}
            label={el.label}
            name={el.icon}
            color={el.id === 6 ? 'red' : 'black'}
          />

          {el.id === 2 ? (
            <RadioGroup
              defaultValue="en"
              direction="row"
              label="Select Language"
              name="lang"
              options={langs}
            />
          ) : (
            el.id === 3 && <Switch checked={false} />
          )}
        </HStack>
      ))}
    </VStack>
  );
}
