import React, { useEffect, useState } from "react";
import { Box, Spacer, Text, Image} from "native-base";

const AIBar = () => {
  // Aquí se guardará el tip generado por Gemini
  const [tip, setTip] = useState("Tip: Keep your windows closed during high winds to prevent dust and debris from entering your home.");

  useEffect(() => {
    fetch('AIzaSyADCCTkoTbOKG8KX4XNf2JmMVegDhrztL0', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer TU_API_KEY', 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: 'Dame un tip random para el clima' })
    })
      .then(res => res.json())
      .then(data => setTip(data.tip))
      .catch(err => console.error(err));
  }, []);

  return (
    <Box bg="#27272a" w="85%" h="100px" rounded="lg" m={2} p="2" shadow="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box w="100%" h="100%" p={4} flexDirection="row" alignItems="center" justifyContent="center">
        <Box w={35} h={35} mr={2}>
          <Image source={require("../assets/Gemini_Logo.png")} style={{ width: 35, height: 35 }} />
        </Box>
        <Text fontSize="md" fontWeight="normal" m={4} color={"#ffffff"}>
          {tip}
        </Text>
      </Box>
    </Box>
  );
};

export default AIBar;
