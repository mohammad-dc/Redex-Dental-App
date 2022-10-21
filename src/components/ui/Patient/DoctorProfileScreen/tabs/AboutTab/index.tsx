import {Box, VStack} from 'native-base';
import React from 'react';
import Button from '../../../../../Form/Buttons/Button';
import Text from '../../../../../Text';

export default function AboutTab() {
  return (
    <Box>
      <VStack space={10}>
        <Text
          value={
            'A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health. A doctor is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury'
          }
          color={'border'}
          size={'sm'}
          family={'regular'}
        />
        <Button text="Make An Appointment" style="primary" />
      </VStack>
    </Box>
  );
}
