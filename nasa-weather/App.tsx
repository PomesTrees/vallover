import React, { useMemo, useState } from "react";
import { useColorScheme, Platform } from "react-native";
import { NativeBaseProvider, Box, Text, VStack, HStack, Input, Button } from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import MapPicker from "./components/MapPicker";
import BottomSheetLite from "./components/BottomSheetLite";
import CustomWeatherChart from "./components/CustomWeatherChart";  // :contentReference[oaicite:9]{index=9}
import MyBarChart from "./components/MyBarChart";                  // :contentReference[oaicite:10]{index=10}
import AIBar from "./components/AIBar";                            // :contentReference[oaicite:11]{index=11}
import Wideget from "./components/Widget";                         // :contentReference[oaicite:12]{index=12}
import * as Location from "expo-location";

type LatLng = { latitude: number; longitude: number };

export default function App() {
  const scheme = useColorScheme();
  const bg = scheme === "dark" ? "#0b1220" : "#ffffff";

  const [coords, setCoords] = useState<LatLng>({ latitude: 19.432608, longitude: -99.133209 });
  const [place, setPlace] = useState<string>("Mi ubicación");
  const [date, setDate]   = useState<string>(new Date().toISOString().slice(0,10));
  const [time, setTime]   = useState<string>("12:00");

  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Reverse geocoding básico (expo-location) al cambiar coords
  React.useEffect(() => {
    (async () => {
      try {
        const r = await Location.reverseGeocodeAsync({ latitude: coords.latitude, longitude: coords.longitude });
        if (r?.length) {
          const top = r[0];
          const label = [top.name, top.city, top.country].filter(Boolean).join(", ");
          setPlace(label || "Lugar seleccionado");
        } else {
          setPlace("Lugar seleccionado");
        }
      } catch {
        setPlace("Lugar seleccionado");
      }
    })();
  }, [coords.latitude, coords.longitude]);

  // MOCK: temperatura por ahora (luego integramos tu API / Open-Meteo / etc.)
  const temperature = useMemo(() => 24, []);
  const windKmh = 9.7;

  return (
    <GluestackUIProvider config={config}>
      <NativeBaseProvider>
        <Box flex={1} bg={bg}>
          {/* Encabezado con selector de fecha/hora */}
          <VStack space="2" px="4" pt="6" pb="2" bg="#175997ff">
            <Text fontSize="lg" color="#fff" fontWeight="bold">Search</Text>
            <HStack space="2">
              <Input
                flex={1}
                bg="#ffffff"
                type="text"
                value={date}
                onChangeText={setDate}
                placeholder="YYYY-MM-DD"
                InputLeftElement={<Box ml="3"><Text>Calendario</Text></Box>}
              />
              <Input
                flex={1}
                bg="#ffffff"
                type="text"
                value={time}
                onChangeText={setTime}
                placeholder="HH:MM"
                InputLeftElement={<Box ml="3"><Text>Hora</Text></Box>}
              />
            </HStack>
          </VStack>

          {/* Mapa principal */}
          <Box flex={1} px="4" py="3">
            <MapPicker
              initial={coords}
              onPick={(p) => setCoords(p)}
            />
          </Box>

          {/* Panel deslizable */}
          <BottomSheetLite peek={140} full={Platform.OS === "web" ? 520 : 620}>
            <VStack space="3">
              {/* Tarjeta superior estilo “My Location” */}
              <Box bg="#1f2937" borderRadius={12} p="4">
                <Text color="#93c5fd" fontSize="xs">Mi ubicación</Text>
                <HStack alignItems="center" justifyContent="space-between">
                  <VStack>
                    <Text color="#fff" fontSize="md" fontWeight="bold">{place}</Text>
                    <Text color="#cbd5e1">{coords.latitude.toFixed(6)}, {coords.longitude.toFixed(6)}</Text>
                  </VStack>
                  <Box bg="#334155" px="3" py="1.5" borderRadius={10}>
                    <Text color="#e2e8f0" fontWeight="bold">{temperature}°</Text>
                  </Box>
                </HStack>
              </Box>

              {/* Bloques tipo cards */}
              <HStack space="3">
                <Box flex={1} bg="#1f2937" borderRadius={12} p="4">
                  <Text color="#94a3b8">Humedad</Text>
                  <Text color="#e2e8f0" fontSize="xs" mb="2">Última hora</Text>
                  <MyBarChart /> {/* 75% mock dentro del componente */}
                </Box>
                <Box flex={1} bg="#1f2937" borderRadius={12} p="4">
                  <Text color="#94a3b8">Viento</Text>
                  <HStack alignItems="center" mt="3">
                    <Text color="#e2e8f0" fontSize="lg" fontWeight="bold">{windKmh} km/h</Text>
                  </HStack>
                </Box>
              </HStack>

              {/* Gráfica grande */}
              <Box bg="#1f2937" borderRadius={12} p="3">
                <Text color="#e2e8f0" mb="2">Solar Radiation / Day forecast</Text>
                <CustomWeatherChart />
              </Box>

              {/* Tips (AI bar) */}
              <AIBar />
              {/* Widgets extra */}
              <HStack space="3" flexWrap="wrap">
                <Wideget />
                <Wideget />
              </HStack>

              {/* Fecha/Hora seleccionadas */}
              <HStack justifyContent="space-between" mt="1" px="1">
                <Text color="#94a3b8">Fecha:</Text>
                <Text color="#e2e8f0">{date} {time}</Text>
              </HStack>
            </VStack>
          </BottomSheetLite>
        </Box>
      </NativeBaseProvider>
    </GluestackUIProvider>
  );
}
