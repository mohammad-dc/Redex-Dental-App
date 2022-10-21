import React, {useState} from 'react';
import {Box, Center, HStack, VStack} from 'native-base';
import Text from '../../../Text';
import {colors} from '../../../../common/colors';
import {DoctorProfileTabs} from '../../../../static/tabs';
import {TouchableOpacity} from 'react-native';
import AboutTab from './tabs/AboutTab';
import WorksTab from './tabs/WorksTab';
import ScheduleTab from './tabs/ScheduleTab';
import ReviewsTab from './tabs/ReviewsTab';

interface ITabBoxProps {
  text: string;
  id: number;
  onPress: (e: any) => void;
  active: boolean;
}

const tabsBody = [<AboutTab />, <WorksTab />, <ScheduleTab />, <ReviewsTab />];

const TabBox = ({text, id, onPress, active}: ITabBoxProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(id)}>
      <Box
        p={2}
        bg={active ? colors.dark_blue : 'transparent'}
        borderRadius={'lg'}>
        <Center>
          <Text
            value={text}
            color={active ? 'white' : 'black'}
            family={'semi_bold'}
          />
        </Center>
      </Box>
    </TouchableOpacity>
  );
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <Box>
      <VStack space={3}>
        <Box p={1} w={'full'} bg={'rgba(39, 168,244,0.16)'} borderRadius={'xl'}>
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            {DoctorProfileTabs.map(el => (
              <TabBox
                text={el.tab}
                key={el.id}
                id={el.id}
                active={activeTab === el.id}
                onPress={id => setActiveTab(id)}
              />
            ))}
          </HStack>
        </Box>
        {tabsBody[activeTab - 1]}
      </VStack>
    </Box>
  );
}
