import React from 'react';
import {Box, Spacer, VStack} from 'native-base';
import Text from '../../../../../Text';
import {monthNames} from '../../../../../../static/app';
import {FlatList} from 'react-native';
import DayRow from './DayRow';
import Button from '../../../../../Form/Buttons/Button';

export default function ScheduleTab() {
  const current_date = new Date();
  const month = monthNames[current_date.getMonth() - 1];
  const year = current_date.getFullYear();
  return (
    <Box>
      <VStack justifyContent={'flex-start'} space={2}>
        <Text value={`${month} ${year}`} family={'semi_bold'} size={'xl'} />
        {/* <FlatList
        
        /> */}
        {Array.from({length: 7}).map((_, i) => (
          <DayRow
            key={i}
            day="MON"
            vacation={i === 5}
            start_time="08:45 AM"
            end_time="07:00 PM"
          />
        ))}
      </VStack>
    </Box>
  );
}
