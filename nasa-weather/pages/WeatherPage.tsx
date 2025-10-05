import React, { useEffect, useState } from "react";
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

  type WeatherData = {
    properties?: {
      parameter?: {
        [key: string]: {
          [month: string]: number;
        };
      };
    };
  };
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Variables para latitud y longitud
  const LATITUDE = 25.664642;
  const LONGITUDE = -100.421562;

  // Selección de año y mes
  const [selectedYear, setSelectedYear] = useState(2015);
  const [selectedMonth, setSelectedMonth] = useState("JAN");

  useEffect(() => {
    fetch(`https://power.larc.nasa.gov/api/temporal/climatology/point?start=2001&end=2020&latitude=${LATITUDE}&longitude=${LONGITUDE}&community=ag&parameters=T2M,RH2M,WS2M,PRECTOTCORR,ALLSKY_SFC_SW_DWN,CLOUD_AMT&header=true`)
      .then(res => res.json())
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  // Helper para mostrar valores
  const getValue = (param: string, month = selectedMonth) => {
    return weatherData?.properties?.parameter?.[param]?.[month] ?? "-";
  };

  // Helper para obtener datos mensuales para charts
  const getMonthlyData = (param: string): { value: number; label: string }[] => {
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    if (!weatherData?.properties?.parameter?.[param]) return [];
    return months.map((m) => ({ value: weatherData.properties?.parameter?.[param]?.[m] ?? 0, label: m }));
  };

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
        {/* Selector de año y mes */}
        <HStack w="100%" justifyContent="center" alignItems="center" mt={20} mb={2}>
          <Text color="#fff" mr={2}>Año:</Text>
          <Button size="sm" onPress={() => setSelectedYear(selectedYear - 1)}>-</Button>
          <Text color="#fff" mx={2}>{selectedYear}</Text>
          <Button size="sm" onPress={() => setSelectedYear(selectedYear + 1)}>+</Button>
          <Text color="#fff" ml={4} mr={2}>Mes:</Text>
          <Button size="sm" onPress={() => setSelectedMonth("JAN")}>Ene</Button>
          <Button size="sm" onPress={() => setSelectedMonth("FEB")}>Feb</Button>
          <Button size="sm" onPress={() => setSelectedMonth("MAR")}>Mar</Button>
          <Button size="sm" onPress={() => setSelectedMonth("APR")}>Abr</Button>
          <Button size="sm" onPress={() => setSelectedMonth("MAY")}>May</Button>
          <Button size="sm" onPress={() => setSelectedMonth("JUN")}>Jun</Button>
          <Button size="sm" onPress={() => setSelectedMonth("JUL")}>Jul</Button>
          <Button size="sm" onPress={() => setSelectedMonth("AUG")}>Ago</Button>
          <Button size="sm" onPress={() => setSelectedMonth("SEP")}>Sep</Button>
          <Button size="sm" onPress={() => setSelectedMonth("OCT")}>Oct</Button>
          <Button size="sm" onPress={() => setSelectedMonth("NOV")}>Nov</Button>
          <Button size="sm" onPress={() => setSelectedMonth("DEC")}>Dic</Button>
        </HStack>
        {/* Contenido scrollable */}
        <ScrollView style={{ flex: 1, marginTop: 65 }} contentContainerStyle={{ flexGrow: 1 }}>
          <VStack w="100%" h="15%" mb="4" bg={cardColor}>
            <Box w="100%" h="100%" bg="#175997ff" justifyContent="center" alignItems="center" borderBottomLeftRadius={10} borderBottomRightRadius={10}>
              <MaterialCommunityIcons name="weather-lightning" color="#ffffffff" size={120} />
              <Text fontSize="lg" fontWeight="bold" color={"#ffffff"}>Weather</Text>
              <Text color={"#ffffff"}>{selectedMonth} {selectedYear}</Text>
            </Box>
          </VStack>
              <Spacer />
              <HStack w="100%" h="250px" pl="4" pr="4" alignContent="center" justifyContent="center" flexWrap="wrap" >
                {/* Chart de temperatura mensual */}
                <CustomWeatherChart data={getMonthlyData("T2M")} title="Temperatura mensual" color="#0288d1" />
              </HStack>
              <HStack w="100%" justifyContent="center" flexWrap="wrap">
                {/* Chart de humedad mensual */}
                <MyBarChart data={getMonthlyData("RH2M")} title="Humedad mensual" />
              </HStack>
              <Spacer />
                <Text m={5} fontWeight="bold" fontSize="lg" color={"#ffffff"}>Details</Text>
              {/* <Spacer /> */}
              {!loading && weatherData && (
                <>
                  <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap">
                    <Wideget label="Temperatura" value={getValue("T2M")} unit="°C" icon={<MaterialCommunityIcons name="thermometer" color="#e81f1fff" size={40} />} />
                    <Wideget label="Humedad" value={getValue("RH2M")} unit="%" icon={<MaterialCommunityIcons name="water-percent" color="#1fe826ff" size={40} />} />
                  </HStack>
                  <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap">
                    <Wideget label="Viento" value={getValue("WS2M")} unit="m/s" icon={<MaterialCommunityIcons name="weather-windy" color="#2e8ae6ff" size={40} />} />
                    <Wideget label="Precipitación" value={getValue("PRECTOTCORR")} unit="mm/día" icon={<MaterialCommunityIcons name="weather-rainy" color="#1f87e8ff" size={40} />} />
                  </HStack>
                  <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap">
                    <Wideget label="Radiación solar" value={getValue("ALLSKY_SFC_SW_DWN")} unit="MJ/m²/día" icon={<MaterialCommunityIcons name="white-balance-sunny" color="#e8c21fff" size={40} />} />
                    <Wideget label="Nubosidad" value={getValue("CLOUD_AMT")} unit="%" icon={<MaterialCommunityIcons name="weather-cloudy" color="#cccccc" size={40} />} />
                  </HStack>
                </>
              )}
              <HStack w="100%" pl="4" pr="4" justifyContent="center" flexWrap="wrap">
                {/* Chart de viento mensual */}
                <CustomWeatherChart data={getMonthlyData("WS2M")} title="Viento mensual" color="#2e8ae6" />
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