import React from "react";
import { Box, Spacer, Text} from "native-base";
import Fontisto from 'react-native-vector-icons/Fontisto';

interface WidgetProps {
  label: string;
  value: string | number;
  unit?: string;
  icon?: React.ReactNode;
}

const Wideget: React.FC<WidgetProps> = ({ label, value, unit, icon }) => {
  return (
    <Box bg="#27272a" w="190px" h="170px" rounded="lg" m={2} shadow="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Text fontSize="13" fontWeight="bold" color={"#ffffff"}>
        {label}
      </Text>
      <Box w="100%" h="140px" alignItems="center" justifyContent="center" >
        <Box flexDirection="row" alignItems="center" >
          {icon ? icon : <Fontisto name="wind" color="#2e8ae6ff" size={50} />}
          <Text fontSize="md" fontWeight="normal" m={4} color={"#ffffff"}>
            {value} {unit}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Wideget;
