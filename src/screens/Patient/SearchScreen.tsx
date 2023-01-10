import React from 'react';
import {Box, ScrollView, VStack} from 'native-base';
import {colors} from '../../common/colors';
import AppBar from '../../components/ui/Patient/SearchScreen/AppBar';
import Text from '../../components/Text';
import {FlatGrid} from 'react-native-super-grid';
import DoctorCard from '../../components/utils/cards/DoctorCard';

export default function SearchScreen() {
  return (
    <Box bg={colors.bg_gray} h={'full'} w={'full'}>
      <AppBar />
      <VStack space={5} mt={'30px'} p={4}>
        <Text value="Top Doctors" size="lg" family="bold" />
        <Box h={'82%'}>
          <FlatGrid
            itemDimension={120}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            // staticDimension={300}
            // fixed
            spacing={10}
            renderItem={() => <DoctorCard />}
          />
        </Box>
      </VStack>
    </Box>
  );
}
