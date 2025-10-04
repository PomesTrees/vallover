import React from "react";
import { NativeBaseProvider, Box, Text, Button, VStack } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeArea bg="primary.600" px="4" py="3">
        <Text color="white" fontSize="lg" fontWeight="bold">
          NASA Weather — UI online ✅
        </Text>
      </Box>

      <VStack space="4" p="4">
        <Box bg="gray.100" rounded="lg" p="4" shadow="1">
          <Text fontSize="md">
            NativeBase (Chakra-style) is installed. Next: NASA POWER fetch.
          </Text>
        </Box>
        <Button onPress={() => console.log("Button works!")}>Press me</Button>
      </VStack>
    </NativeBaseProvider>
  );
}
