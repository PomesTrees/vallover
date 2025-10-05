import React from "react";
import { NativeBaseProvider, Box, Text, Button, VStack } from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { LineChart } from "react-native-gifted-charts";

export default function App() {
  // Sample data for the chart
  const chartData = [
    { value: 20, label: 'Jan' },
    { value: 35, label: 'Feb' },
    { value: 28, label: 'Mar' },
    { value: 45, label: 'Apr' },
    { value: 32, label: 'May' },
    { value: 55, label: 'Jun' },
  ];

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
          
          <Box bg="white" rounded="lg" p="4" shadow="2">
            <Text fontSize="md" fontWeight="bold" mb="4">
              Sample Temperature Chart
            </Text>
            <LineChart
              data={chartData}
              width={300}
              height={200}
              color="#0BA5EC"
              thickness={3}
              dataPointsColor="#0BA5EC"
              textColor="#333"
              textShiftY={-8}
              textShiftX={-10}
              showVerticalLines
              verticalLinesColor="rgba(14,164,164,0.5)"
              xAxisColor="lightgray"
              yAxisColor="lightgray"
            />
          </Box>
          
          <Button onPress={() => console.log("Button works!")}>
            Test Button
          </Button>
        </VStack>
      </NativeBaseProvider>
    </GluestackUIProvider>
  );
}
