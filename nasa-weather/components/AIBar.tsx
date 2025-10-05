import React, { useEffect, useState } from "react";
import { Box, Spacer, Text, Image} from "native-base";

const AIBar = () => {
  // Aquí se guardará el tip generado por Gemini
  const [tip, setTip] = useState("Tip: Keep your windows closed during high winds to prevent dust and debris from entering your home.");

  useEffect(() => {
    fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': 'AIzaSyADCCTkoTbOKG8KX4XNf2JmMVegDhrztL0',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: 'Dame un tip random para el clima y usa el siguiente formato: "Tip: <tip>". El tip debe ser en ingles y relacionado con el clima. Solo muestra el tip no me des texto adicional',
                },
              ],
            },
          ],
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // Gemini responde en data.candidates[0].content.parts[0].text
        const tipText =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          'Tip: No se pudo obtener el tip.';
        setTip(tipText);
      })
      .catch((err) => {
        console.error(err);
        setTip('Tip: Error al obtener el tip.');
      });
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
