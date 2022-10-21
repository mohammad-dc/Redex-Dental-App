import React from 'react';
import {Box, ScrollView, VStack} from 'native-base';
import {colors} from '../common/colors';
import HeaderTitle from '../components/HeaderTitle';
import NotificationCard from '../components/utils/cards/NotificationCard';

export default function NotificationsScreen() {
  return (
    <ScrollView h={'full'} w={'full'} bg={colors.bg_gray}>
      <Box h={'full'} w={'full'} p={3}>
        <VStack space={4}>
          <HeaderTitle heading="Notifications" />

          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </VStack>
      </Box>
    </ScrollView>
  );
}
