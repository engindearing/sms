import { Center, Text, View } from "native-base";

import { AnimatedCircularProgress } from "react-native-circular-progress";

import { Button } from "native-base";

import { useState } from "react";
import { ReserveBedsModal } from "./ReserveBedsModal";

const CreateReservation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <AnimatedCircularProgress
        size={350}
        width={22}
        fill={40}
        tintColor="#fec357"
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="#3d5875"
      >
        {(fill) => (
          <Center>
            <Text fontSize={'7xl'}>22</Text>
            <Text fontWeight={'light'} fontSize={"2xl"}>Beds available</Text>
          </Center>
        )}
      </AnimatedCircularProgress>

      <Button
        onPress={() => setIsOpen(true)}
        size={"lg"}
        backgroundColor={"#3d5875"}
        marginTop={10}
      >
        Check-in
      </Button>

      <ReserveBedsModal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
    </View>
  );
};

export default CreateReservation;
