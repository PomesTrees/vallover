import React from "react";
import { Box, Spacer, Text} from "native-base";
import Fontisto from 'react-native-vector-icons/Fontisto';

const Wideget = () => {
  return (
    <Box bg="#27272a" w="240px" h="220px" rounded="lg" m={2} p="2" shadow="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderWidth={2} borderColor="#e81f1fff">
        <Text fontSize="13" fontWeight="bold" mb="4" color={"#ffffff"}>
            Widget
        </Text>
        <Box w="100%" h="140px" alignItems="center" justifyContent="center" borderWidth={2} borderColor="#e81f1fff">
            <Box flexDirection="row" alignItems="center" borderWidth={2} borderColor="#e81f1fff">
              <Fontisto name="wind" color="#2e8ae6ff" size={50} />
              <Text fontSize="md" fontWeight="normal" m={4} color={"#ffffff"}>
                9.7 km/h
              </Text>
            </Box>
        </Box>
    </Box>
  );
};

export default Wideget;
