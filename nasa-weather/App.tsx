import React from "react";
import { useColorScheme } from "react-native";
import { NativeBaseProvider, Box, Text, Button, VStack, HStack, Spacer, ScrollView} from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import CustomWeatherChart from "./components/CustomWeatherChart";
import Wideget from "./components/Widget";
import AIBar from "./components/AIBar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MyBarChart from "./components/MyBarChart";

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
              <VStack w="100%" h="5%" bg={cardColor}>
                <Box w="100%" h="100%" bg="#175997ff" p={5} flexDirection="row" alignItems="center" justifyContent="space-between" borderWidth={2} borderTopLeftRadius={20} borderTopRightRadius={20} borderColor="#1f87e8ff">
                  <MaterialIcons name="arrow-back-ios" color="#ffffffff" size={20} />
                  <Text fontSize="lg" fontWeight="bold" color={"#ffffff"}>City, Country</Text>
                  <Entypo name="dots-three-horizontal" color="#ffffffff" size={20} />
                </Box>
                <Box w="100%" h="100%" bg="#175997ff" flexDirection="row" justifyContent="center" alignItems="center" borderWidth={2} borderColor="#1f87e8ff">
                  <MaterialCommunityIcons name="weather-lightning" color="#ffffffff" size={100} />
                </Box>
                <Box w="100%" h="100%" bg="#175997ff" justifyContent="center" alignItems="center" borderWidth={2} borderColor="#1f87e8ff">
                  <Text fontSize="lg" fontWeight="bold" color={"#ffffff"}>Weather</Text>
                  <Text color={"#ffffff"}>Weekday, Day Month Year</Text>
                </Box>
                <Box w="100%" h="100%" bg="#175997ff" justifyContent="center" alignItems="center" borderWidth={2} borderBottomLeftRadius={20} borderBottomRightRadius={20} borderColor="#5be81fff">
                </Box>
              </VStack>
              <HStack w="100%" h="17%" mt={200} pl="4" pr="4" alignContent="center" justifyContent="center" flexWrap="wrap" borderWidth={2} borderColor="#e81f1fff">
                <CustomWeatherChart />
              </HStack>
               <HStack w="100%" justifyContent="center" flexWrap="wrap" borderWidth={2} borderColor="#291fe8ff">
                <MyBarChart />
              </HStack>
              <Spacer />
                <Text mb={5} fontWeight="bold" fontSize="lg" color={"#ffffff"}>Details</Text>
              {/* <Spacer /> */}
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
              {/* <Spacer /> */}
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