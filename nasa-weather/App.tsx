import React from "react";
import { useColorScheme } from "react-native";
import { NativeBaseProvider, Box, Text, Button, VStack, HStack, Spacer} from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import CustomWeatherChart from "./components/CustomWeatherChart";

export default function App() {
  const scheme = useColorScheme();
  const bgColor = scheme === 'dark' ? '#18181b' : 'white';
  const cardColor = scheme === 'dark' ? '#343438ff' : 'white';

  return (
    <GluestackUIProvider config={config}>
      <NativeBaseProvider>
        <VStack space="4" p="4" bg={bgColor} width="100%" height="100%">
          <Box rounded="lg" p="4" shadow="2" bg={cardColor}>
            <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap">
              <CustomWeatherChart />
              <CustomWeatherChart />
            </HStack>
          </Box>
        </VStack>
      </NativeBaseProvider>
    </GluestackUIProvider>
  );
}
