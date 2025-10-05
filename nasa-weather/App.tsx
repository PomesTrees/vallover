import React from "react";
import { NativeBaseProvider, Box, Text, Button, VStack } from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { LineChart } from "react-native-gifted-charts";
// import { LineChart as RNCKLineChart } from "react-native-chart-kit";
// import { Dimensions } from "react-native";
import CustomWeatherChart from "./components/CustomWeatherChart";

export default function App() {

  return (
    <GluestackUIProvider config={config}>
      <NativeBaseProvider>
        <Box safeArea bg="primary.600" px="4" py="3">
          <Text color="white" fontSize="lg" fontWeight="bold">
            NASA Weather — UI online ✅
          </Text>
        </Box>

        <VStack space="4" p="4">
          <Box bg="gray.100" rounded="lg" p="4" shadow="1">
            <Text fontSize="md" mb="2">
              NativeBase + Gluestack UI + Gifted Charts integrated! 🚀
            </Text>
            <Text fontSize="sm" color="gray.600">
              Testing chart component below:
            </Text>
          </Box>
          
          <Button onPress={() => console.log("Button works!")}>
            Test Button
          </Button>

          <Box bg="white" rounded="lg" p="4" shadow="2" mt="4">
            <Text fontSize="md" fontWeight="bold" mb="4">
              Bezier Line Chart (Gifted Charts)
            </Text>
            <CustomWeatherChart />
          </Box>
        </VStack>
      </NativeBaseProvider>
    </GluestackUIProvider>
  );
}
