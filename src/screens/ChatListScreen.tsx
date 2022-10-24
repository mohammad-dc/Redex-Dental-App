import {Box, Center, FlatList, VStack} from 'native-base';
import React, {useState} from 'react';
import {colors} from '../common/colors';
import SearchBox from '../components/Form/Inputs/SearchBox';
import Text from '../components/Text';
import UserChat from '../components/ui/ChatList/UserChat';

export default function ChatListScreen() {
  const [search, setSearch] = useState<any>();
  return (
    <Box bg={colors.bg_gray} p={4} h={'full'} w={'full'}>
      <VStack h={'15%'} space={3}>
        <Center>
          <Text value={'Messages'} family={'bold'} />
        </Center>
        <SearchBox
          isFull={true}
          hint="Search"
          name="search_message"
          value={search}
          onChangeText={e => setSearch(e.target.value)}
        />
      </VStack>
      <Box h={'85%'}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={item => item.toString()}
          renderItem={() => <UserChat />}
        />
      </Box>
    </Box>
  );
}
