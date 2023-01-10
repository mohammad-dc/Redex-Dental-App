import {Box} from 'native-base';
import React from 'react';
import AppBar from '../components/AppBar';
import TabView from '../components/TabView';

export default function AppointmentsScreen() {
  return (
    <Box w={'full'} h={'full'}>
      <AppBar />
      <TabView />
    </Box>
  );
}
