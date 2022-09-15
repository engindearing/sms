import React, { useState } from 'react';
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

import {useReservations, useUpdateReservation} from "../../../../../../../api/hooks/useReservations";

import LoadingScreen from "../../../../../../../components/LoadingScreen";
import {updateReservation} from "../../../../../../../api/reservations";

const statusColors = {
  pending: "yellow.500",
  denied:  "red.500",
  verified: "green.500",
}

function VerifyCheckIns() {
  const { data: reservations, isLoading } = useReservations()

  const {mutate: updateReservation} = useUpdateReservation()

  const [mode, setMode] = useState('Basic');

  if(isLoading) {
    return <LoadingScreen />
  }

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
  const [listData, setListData] = useState(reservations.map(res => ({...res, key: res._id})));

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const openRow = (rowMap, rowKey) => {
    if (rowMap[rowKey].isOpen) {
      rowMap[rowKey].manuallySwipeRow(0);
    } else {
      rowMap[rowKey].manuallySwipeRow(-150);
    }
  };

  const verifyCheckIn = (rowMap, rowKey) => {
    updateReservation({reservationId: rowKey, payload: {status: "verified"}})
    let newData = [...listData];
    let itemIndex = listData.findIndex(item => item._id === rowKey);
    newData[itemIndex]['status'] = 'verified'
    setListData(newData);
    closeRow(rowMap, rowKey);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({
                        item,
                        index
                      }, rowMap) => <Box>
    <Pressable onPress={() => openRow(rowMap, item.key)} _dark={{
      bg: 'coolGray.800'
    }} _light={{
      bg: 'white'
    }}>
      <Box pl="4" pr="5" py="2">
        <HStack alignItems="center" space={10}>
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
          <VStack>
            <Text color="coolGray.800" _dark={{
              color: 'warmGray.50'
            }} bold>
              Status
            </Text>
            <Text color={statusColors[item.status]} _dark={{
              color: 'warmGray.200'
            }}>
              {item.status}
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
    <Pressable w="70" ml="auto" cursor="pointer" bg="coolGray.200" justifyContent="center" onPress={() => closeRow(rowMap, data.item._id)} _pressed={{
      opacity: 0.5
    }}>
      <VStack alignItems="center" space={2}>
        <Icon as={<Entypo name="dots-three-horizontal" />} size="xs" color="coolGray.800" />
        <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
          More
        </Text>
      </VStack>
    </Pressable>
    <Pressable w="70" cursor="pointer" bg="green.500" justifyContent="center" onPress={() => verifyCheckIn(rowMap, data.item._id)} _pressed={{
      opacity: 0.5
    }}>
      <VStack alignItems="center" space={2}>
        <Icon as={<MaterialIcons name="check" />} color="white" size="xs" />
        <Text color="white" fontSize="xs" fontWeight="medium">
          Verify
        </Text>
      </VStack>
    </Pressable>
  </HStack>;

  return <Box bg="white" safeArea flex="1">
    <SwipeListView data={listData} renderItem={renderItem} renderHiddenItem={renderHiddenItem} rightOpenValue={-130} listKey={'_id'} previewRowKey={'0'} previewOpenValue={-40} previewOpenDelay={3000} onRowDidOpen={onRowDidOpen} />
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
