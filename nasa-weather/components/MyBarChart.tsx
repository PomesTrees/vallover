import React from "react";
import { Box, Spacer, Text, Image, Center, Progress } from "native-base";
import Fontisto from 'react-native-vector-icons/Fontisto';

const MyBarChart = () => {
  return (
    <Box bg="#27272a" w="85%" h="90px" rounded="lg" m={2} p="2" shadow="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Center w="100%">
          <Text fontSize="md" fontWeight="bold" mb="4" color={"#ffffff"}>
            Humidity
          </Text>
          <Box w="90%" maxW="400" flexDirection="row" alignItems="center">
            <Progress bg="coolGray.100" _filledTrack={{ bg: "primary.500" }} value={75} mx="4" flex={1} />
            <Text ml={2} color="#ffffff" fontWeight="bold">75%</Text>
          </Box>
        </Center>
  </Box>
  );
};

export default MyBarChart;
