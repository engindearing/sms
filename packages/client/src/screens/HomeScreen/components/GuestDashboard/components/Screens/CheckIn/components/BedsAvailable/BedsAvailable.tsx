import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Center, Text } from "native-base";

const BedsAvailable = ({ totalBeds, bedsReserved }) => {
  let bedsAvailable = totalBeds - bedsReserved;

  let percentage = (bedsReserved / totalBeds) * 100;
  
  return (
    <AnimatedCircularProgress
      size={350}
      width={22}
      fill={percentage}
      tintColor="#fec357"
      onAnimationComplete={() => console.log("onAnimationComplete")}
      backgroundColor="#3d5875"
      style={{ marginBottom: 20 }}
    >
      {(fill) => (
        <Center>
          <Text fontSize={"7xl"}>{bedsAvailable}</Text>
          <Text fontWeight={"light"} fontSize={"2xl"}>
            Beds available
          </Text>
        </Center>
      )}
    </AnimatedCircularProgress>
  );
};

export default BedsAvailable;
