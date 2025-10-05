import React from "react";
import { Box, Spacer, Text, Image} from "native-base";
// import Fontisto from 'react-native-vector-icons/Fontisto';

const AIBar = () => {
  return (
    <Box bg="#27272a" w="85%" h="100px" rounded="lg" m={2} p="2" shadow="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Box w="100%" h="100%" p={4} flexDirection="row" alignItems="center" justifyContent="center">
              <Box w={35} h={35} mr={2}>
                <Image source={require("../assets/Gemini_Logo.png")} style={{ width: 35, height: 35 }} />
              </Box>
              <Text fontSize="md" fontWeight="normal" m={4} color={"#ffffff"}>
                Tip: Keep your windows closed during high winds to prevent dust and debris from entering your home.
              </Text>
        </Box>
    </Box>
  );
};

export default AIBar;
