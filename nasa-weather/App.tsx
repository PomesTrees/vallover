import React from "react";
import { useColorScheme } from "react-native";
import { NativeBaseProvider, Box, Text, Button, VStack, HStack, Spacer, ScrollView} from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import CustomWeatherChart from "./components/CustomWeatherChart";
import Wideget from "./components/Widget";
import AIBar from "./components/AIBar";

export default function App() {
  const scheme = useColorScheme();
  const bgColor = scheme === 'dark' ? '#18181b' : 'white';
  const cardColor = scheme === 'dark' ? '#343438ff' : 'white';

  return (
    <GluestackUIProvider config={config}>
      <NativeBaseProvider>
        <VStack space="4" p="4" bg={bgColor} width="100%" height="100%">
          <Box rounded="lg" p="4" shadow="2" bg={cardColor} borderWidth={2} borderColor="#e81fd1ff" flex={1}> 
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
              <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap" borderWidth={2} borderColor="#e81f1fff">
                <CustomWeatherChart />
              </HStack>
              <Text color={"#ffffff"}>Details</Text>
              <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap" borderWidth={2} borderColor="#1fe826ff">
                <Wideget />
                <Wideget /> 
              </HStack>
              <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap" borderWidth={2} borderColor="#1fe826ff">
                <Wideget />
                <Wideget /> 
              </HStack>
              <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap" borderWidth={2} borderColor="#1fe826ff">
                <Wideget />
                <Wideget /> 
              </HStack>
              <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap" borderWidth={2} borderColor="#e81f1fff">
                <CustomWeatherChart />
              </HStack>
              <HStack w="100%" justifyContent="center" flexWrap="wrap" borderWidth={2} borderColor="#291fe8ff">
                <AIBar />
              </HStack>
            </ScrollView>
          </Box>
        </VStack>
      </NativeBaseProvider>
    </GluestackUIProvider>
  );
}




// TO ADD 4X4 CHARTS
// {/* <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap" borderWidth={2} borderColor="#e81f1fff">
//   <CustomWeatherChart />
//   <CustomWeatherChart />
// </HStack> */}