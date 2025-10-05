import React from "react";
import { useColorScheme } from "react-native";
import { NativeBaseProvider, Box, Text, Button, VStack, HStack, Spacer, ScrollView} from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import WeatherPage from "./pages/WeatherPage";
import MapPage from "./pages/MapPage";

export default function App() {

  return (
    <GluestackUIProvider config={config}>
          <NativeBaseProvider>
            <WeatherPage />
          </NativeBaseProvider>
    </GluestackUIProvider>
  );
}



