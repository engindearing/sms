import {
  Box,
  Pressable,
  NativeBaseProvider,
  Center,
  FlatList,
} from "native-base";

import { LinearGradient } from "expo-linear-gradient";

const Card = ({ text, onPress, color }) => {
  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };

  let colorToGradient = (color) => {
    switch (color) {
      case "purple":
        return;
      case "blue":
        return;
      case "gold":
        return;
      case 'purple':
          return
    }
  };

  return (
    <NativeBaseProvider config={config}>
      <Pressable onPress={onPress}>
        <Box
          bg={{
            linearGradient: {
              colors: ["lightBlue.300", "violet.800"],
              start: [0, 0],
              end: [1, 0],
            },
          }}
          rounded="xl"
          _text={{
            fontSize: 27,
            fontWeight: "medium",
            color: "warmGray.50",
            textAlign: "center",
          }}
          style={{ minHeight: 150, width: "100%", marginBottom: 10 }}
          justifyContent="center"
        >
          {text}
        </Box>
      </Pressable>
    </NativeBaseProvider>
  );
};

export default Card;
