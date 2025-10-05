import React, { useEffect, useMemo, useRef, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import MapView, { Marker, MapPressEvent, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { Box, Button, HStack, Icon, Input, Text, VStack } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type LatLng = { latitude: number; longitude: number };

type Props = {
  onPick: (pos: LatLng) => void;
  initial?: LatLng;
};

const DEFAULT: LatLng = { latitude: 19.432608, longitude: -99.133209 }; // CDMX

export default function MapPicker({ onPick, initial }: Props) {
  const [pos, setPos] = useState<LatLng>(initial ?? DEFAULT);
  const [region, setRegion] = useState({
    latitude: pos.latitude,
    longitude: pos.longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [hasPerms, setHasPerms] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setHasPerms(status === "granted");
      if (status === "granted") {
        const loc = await Location.getCurrentPositionAsync({});
        const current = { latitude: loc.coords.latitude, longitude: loc.coords.longitude };
        setPos(current);
        setRegion((r) => ({ ...r, ...current }));
        onPick(current);
      }
    })();
  }, []);

  const handlePress = (e: MapPressEvent) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    const p = { latitude, longitude };
    setPos(p);
    onPick(p);
  };

  if (Platform.OS === "web") {
    // Fallback simple para web: cuadro gris con inputs para coord.
    return (
      <VStack space="2" w="100%" h="100%">
        <Box
          flex={1}
          bg="#e9eef3"
          borderRadius={12}
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="#d0d7de"
        >
          <Text fontSize="md" color="#334155">Mapa (web fallback). Ingresa coords abajo.</Text>
        </Box>

        <HStack space="2" mt="2" px="1">
          <Input
            keyboardType="numeric"
            flex={1}
            placeholder="lat"
            value={String(pos.latitude.toFixed(6))}
            onChangeText={(t) => {
              const v = parseFloat(t) || 0;
              const p = { ...pos, latitude: v };
              setPos(p);
              onPick(p);
            }}
          />
          <Input
            keyboardType="numeric"
            flex={1}
            placeholder="lng"
            value={String(pos.longitude.toFixed(6))}
            onChangeText={(t) => {
              const v = parseFloat(t) || 0;
              const p = { ...pos, longitude: v };
              setPos(p);
              onPick(p);
            }}
          />
          <Button onPress={() => onPick(pos)} leftIcon={<Icon as={MaterialIcons} name="place" />}>
            Fijar
          </Button>
        </HStack>
      </VStack>
    );
  }

  // Native (Android/iOS) con Google Maps:
  return (
    <View style={styles.mapWrap}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        onPress={handlePress}
        onRegionChangeComplete={(r) =>
          setRegion({
            latitude: r.latitude,
            longitude: r.longitude,
            latitudeDelta: r.latitudeDelta,
            longitudeDelta: r.longitudeDelta,
          })
        }
      >
        <Marker coordinate={pos} draggable onDragEnd={(e) => handlePress(e as any)} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapWrap: { flex: 1, borderRadius: 12, overflow: "hidden" },
});
