import {Box, HStack} from 'native-base';
import React from 'react';
import {colors} from '../../../../../../common/colors';
import Text from '../../../../../Text';

interface IDayRowProps {
  day: string;
  start_time: string;
  end_time: string;
  vacation?: boolean;
  isBreak?: boolean;
}
export default function DayRow({
  day,
  start_time,
  end_time,
  vacation = false,
  isBreak = false,
}: IDayRowProps) {
  return (
    <Box
      p={2}
      bg={vacation || isBreak ? 'rgba(255, 0, 94, 0.1)' : colors.bg_gray}
      //   borderBottomWidth={vacation || isBreak ? 0 : 0.3}
      //   borderBottomColor={colors.border}
    >
      <HStack space={'1/3'} justifyContent={'flex-start'} alignItems={'center'}>
        <Text
          color={vacation || isBreak ? 'red' : 'black'}
          value={day}
          size={'sm'}
          family={'regular'}
        />
        {vacation || isBreak ? (
          <Text
            color={'red'}
            value={'Vacation'}
            size={'sm'}
            family={'regular'}
          />
        ) : (
          <HStack space={1} alignItems={'center'}>
            <Text value={start_time} size={'sm'} family={'regular'} />
            <Text value={'-'} size={'sm'} family={'bold'} color={'orange'} />
            <Text value={end_time} size={'sm'} family={'regular'} />
          </HStack>
        )}
      </HStack>
    </Box>
  );
}
