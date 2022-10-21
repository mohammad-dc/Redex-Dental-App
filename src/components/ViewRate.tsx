import {View, Text} from 'react-native';
import React from 'react';
import {Box, HStack} from 'native-base';
import {AntDesignIcon} from '../common/icons';
import {colors} from '../common/colors';

interface IStartProps {
  size?: number;
}
const LightStar = ({size = 16}: IStartProps) => {
  return <AntDesignIcon name="star" color={colors.orange} size={size} />;
};

const OffStar = ({size = 16}: IStartProps) => {
  return <AntDesignIcon name="star" color={colors.border} size={size} />;
};

export default function ViewRate({
  rate,
  size = 16,
}: {
  rate: number;
  size?: number;
}) {
  const rating = Math.floor(rate);
  return (
    <HStack space={1} alignItems={'center'}>
      {Array.from({length: 5}).map((_, i) => {
        return (
          <Box key={i}>
            {i >= rating ? <OffStar size={size} /> : <LightStar size={size} />}
          </Box>
        );
      })}
    </HStack>
  );
}
