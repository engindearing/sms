import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  Heading,
  IconButton,
  Icon,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Center,
  ScrollView
} from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

import {useReservations} from "../../../../../../../api/hooks/useReservations";

function VerifyCheckIns() {
  const { data: reservations } = useReservations()
  const [mode, setMode] = useState('Basic');
  return <Center h="690px" w={'700px'}>
    <Box _dark={{
      bg: 'coolGray.800'
    }} _light={{
      bg: 'white'
    }} flex="1" safeAreaTop maxW="800px" w="100%">
      <Heading p="4" pb="3" size="lg">
        Reservations
      </Heading>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListReservations reservations={reservations} />
      </ScrollView>
    </Box>
  </Center>;
}

function ListReservations({ reservations }: {reservations: DReservation[]}) {
  const [listData, setListData] = useState(reservations);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({
                        item,
                        index
                      }) => <Box>
    <Pressable onPress={() => console.log('You touched me')} _dark={{
      bg: 'coolGray.800'
    }} _light={{
      bg: 'white'
    }}>
      <Box pl="4" pr="5" py="2">
        <HStack alignItems="center" space={3}>
          <VStack>
            <Text color="coolGray.800" _dark={{
              color: 'warmGray.50'
            }} bold>
             Beds
            </Text>
            <Text color="coolGray.600" _dark={{
              color: 'warmGray.200'
            }}>
              {item.beds}
            </Text>
          </VStack>
          <Spacer />
          <Text fontSize="xs" color="coolGray.800" _dark={{
            color: 'warmGray.50'
          }} alignSelf="flex-start">
            {item.createdAt}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  </Box>;

  const renderHiddenItem = (data, rowMap) => <HStack flex="1" pl="2">
    <Pressable w="70" ml="auto" cursor="pointer" bg="coolGray.200" justifyContent="center" onPress={() => closeRow(rowMap, data.item.key)} _pressed={{
      opacity: 0.5
    }}>
      <VStack alignItems="center" space={2}>
        <Icon as={<Entypo name="dots-three-horizontal" />} size="xs" color="coolGray.800" />
        <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
          More
        </Text>
      </VStack>
    </Pressable>
    <Pressable w="70" cursor="pointer" bg="red.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
      opacity: 0.5
    }}>
      <VStack alignItems="center" space={2}>
        <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
        <Text color="white" fontSize="xs" fontWeight="medium">
          Delete
        </Text>
      </VStack>
    </Pressable>
  </HStack>;

  return <Box bg="white" safeArea flex="1">
    <SwipeListView data={listData} renderItem={renderItem} renderHiddenItem={renderHiddenItem} rightOpenValue={-130} previewRowKey={'0'} previewOpenValue={-40} previewOpenDelay={3000} onRowDidOpen={onRowDidOpen} />
  </Box>;
}

export default () => {
  return (
      <NativeBaseProvider>
        <Center flex={1}>
          <VerifyCheckIns />
        </Center>
      </NativeBaseProvider>
  );
};
