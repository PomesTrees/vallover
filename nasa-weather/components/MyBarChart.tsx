
import React from "react";
import { Box, Text, Center, Progress } from "native-base";
import Fontisto from 'react-native-vector-icons/Fontisto';

type BarChartData = { value: number; label: string }[];

interface MyBarChartProps {
  data: BarChartData;
  title?: string;
}

const MyBarChart: React.FC<MyBarChartProps> = ({ data, title = "Humidity" }) => {
  // Usar el promedio de los valores para la barra principal
  const avg = data.length > 0 ? Math.round(data.reduce((acc, d) => acc + (typeof d.value === 'number' ? d.value : 0), 0) / data.length) : 0;
  return (
    <Box bg="#27272a" w="85%" h="90px" rounded="lg" m={2} p="2" shadow="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Center w="100%">
        <Text fontSize="md" fontWeight="bold" mb="4" color={"#ffffff"}>
          {title}
        </Text>
        <Box w="90%" maxW="400" flexDirection="row" alignItems="center">
          <Progress bg="coolGray.100" _filledTrack={{ bg: "primary.500" }} value={avg} mx="4" flex={1} />
          <Text ml={2} color="#ffffff" fontWeight="bold">{avg}%</Text>
        </Box>
      </Center>
    </Box>
  );
};

export default MyBarChart;
