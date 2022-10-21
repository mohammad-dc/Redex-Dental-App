import React, {useState} from 'react';
import {Box, Button, FlatList, Image} from 'native-base';
import {View} from 'react-native';
import Text from '../../../../../Text';

const images = [
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
  },
];
export default function WorksTab() {
  return (
    <Box h={'full'} w={'full'}>
      {/* <FlatList
        data={images}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{width: '300px', height: '300px'}}>
            <Image source={{uri: item.url}} alt="imga" w={'full'} h={'full'} />
          </View>
        )}
      /> */}
    </Box>
  );
}
