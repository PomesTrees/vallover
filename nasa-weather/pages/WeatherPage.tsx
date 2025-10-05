import React from "react";
import { useColorScheme } from "react-native";
import { NativeBaseProvider, Box, Text, Button, VStack, HStack, Spacer, ScrollView, Center} from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import CustomWeatherChart from "../components/CustomWeatherChart";
import Wideget from "../components/Widget";
import AIBar from "../components/AIBar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MyBarChart from "../components/MyBarChart";

const WeatherPage = () => {
  const scheme = useColorScheme();
  const bgColor = scheme === 'dark' ? '#18181b' : 'white';
  const cardColor = scheme === 'dark' ? '#343438ff' : 'white';

  return (
        <VStack space="4" p="4" bg={bgColor} width="100%" height="100%">
          <Box rounded="lg" shadow="2" bg={cardColor} flex={1}> 
            {/* Header fijo */}
            <Box w="100%" h="80px" bg="#175997ff" p={5} flexDirection="row" alignItems="center" justifyContent="space-between" borderTopLeftRadius={10} borderTopRightRadius={10} position="absolute" top={0} left={0} zIndex={10}>
                <Button borderRadius={30} bg="#175997ff" _hover={{ bg: "#175997ff" }} _pressed={{ bg: "#175997ff" }}>
                    <Box width="100%" height="100%" ml="1.5">
                        <MaterialIcons name="arrow-back-ios" color="#ffffffff" size={20} />
                    </Box>
                </Button>
                <Text fontSize="lg" fontWeight="bold" color={"#ffffff"}>City, Country</Text>
                <Button borderRadius={30} bg="#175997ff" _hover={{ bg: "#175997ff" }} _pressed={{ bg: "#175997ff" }}>
                    <Entypo name="dots-three-horizontal" color="#ffffffff" size={20} />
                </Button>
            </Box>
            {/* Contenido scrollable */}
            <ScrollView style={{ flex: 1, marginTop: 65 }} contentContainerStyle={{ flexGrow: 1 }}>
              <VStack w="100%" h="15%" mb="4" bg={cardColor}>
                <Box w="100%" h="100%" bg="#175997ff" justifyContent="center" alignItems="center" borderBottomLeftRadius={10} borderBottomRightRadius={10}>
                  <MaterialCommunityIcons name="weather-lightning" color="#ffffffff" size={120} />
                  <Text fontSize="lg" fontWeight="bold" color={"#ffffff"}>Weather</Text>
                  <Text color={"#ffffff"}>Weekday, Day Month Year</Text>
                </Box>
              </VStack>
              <Spacer />
              <HStack w="100%" h="250px" pl="4" pr="4" alignContent="center" justifyContent="center" flexWrap="wrap" >
                <CustomWeatherChart />
              </HStack>
              <HStack w="100%" justifyContent="center" flexWrap="wrap">
                <MyBarChart />
              </HStack>
              <Spacer />
                <Text m={5} fontWeight="bold" fontSize="lg" color={"#ffffff"}>Details</Text>
              {/* <Spacer /> */}
              <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap">
                <Wideget />
                <Wideget /> 
              </HStack>
              <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap">
                <Wideget />
                <Wideget /> 
              </HStack>
              <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap">
                <Wideget />
                <Wideget /> 
              </HStack>
              <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap">
                <CustomWeatherChart />
              </HStack>
              <HStack w="100%" justifyContent="center" flexWrap="wrap">
                <AIBar />
              </HStack>
            </ScrollView>
          </Box>
        </VStack>
  );
};

export default WeatherPage;




// TO ADD 4X4 CHARTS
// {/* <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap" borderWidth={2} borderColor="#e81f1fff">
//   <CustomWeatherChart />
//   <CustomWeatherChart />
// </HStack> */}