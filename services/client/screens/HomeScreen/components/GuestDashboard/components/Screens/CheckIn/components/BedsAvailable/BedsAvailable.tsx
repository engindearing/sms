import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Center, Text } from "native-base";

const BedsAvailable = () => {
  return (
    <AnimatedCircularProgress
      size={350}
      width={22}
      fill={40}
      tintColor="#fec357"
      onAnimationComplete={() => console.log("onAnimationComplete")}
      backgroundColor="#3d5875"
      style={{ marginBottom: 20 }}
    >
      {(fill) => (
        <Center>
          <Text fontSize={"7xl"}>22</Text>
          <Text fontWeight={"light"} fontSize={"2xl"}>
            Beds available
          </Text>
        </Center>
      )}
    </AnimatedCircularProgress>
  );
};

export default BedsAvailable;
