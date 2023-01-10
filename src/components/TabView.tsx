import React from 'react';
import RecentTabView from './utils/tabView/RecentTabView';
import AllTabView from './utils/tabView/AllTabView';
import TodayTabView from './utils/tabView/TodayTabView';
import {useWindowDimensions} from 'react-native';
import {Box} from 'native-base';

export default function TabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'recent', title: 'Recent'},
    {key: 'all', title: 'All'},
    {key: 'today', title: 'Today'},
  ]);

  return (
    <Box></Box>
    // <NativeTabView
    //   navigationState={{index, routes}}
    //   renderScene={renderScene}
    //   onIndexChange={setIndex}
    //   initialLayout={{width: layout.width}}
    // />
  );
}
