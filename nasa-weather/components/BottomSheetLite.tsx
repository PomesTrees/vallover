import React, { useMemo, useRef, useState } from "react";
import { Animated, Easing, TouchableOpacity, View } from "react-native";
import { Box } from "native-base";

type Props = {
  peek: number;   // altura visible cuando está colapsado
  full: number;   // altura total
  children: React.ReactNode;
};

export default function BottomSheetLite({ peek, full, children }: Props) {
  const [open, setOpen] = useState(false);
  const anim = useRef(new Animated.Value(0)).current; // 0 = cerrado, 1 = abierto

  const height = open ? full : peek;

  const toggle = () => {
    Animated.timing(anim, {
      toValue: open ? 0 : 1,
      duration: 260,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start(() => setOpen(!open));
  };

  const interpolated = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [peek, full],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: interpolated,
      }}
    >
      <TouchableOpacity activeOpacity={0.9} onPress={toggle}>
        <Box alignItems="center" py="2" bg="#0f172a">
          <Box w="50px" h="5px" bg="#475569" borderRadius="full" />
        </Box>
      </TouchableOpacity>
      <Box flex={1} bg="#0f172a" borderTopRadius={16} px="4" pb="6">
        {children}
      </Box>
    </Animated.View>
  );
}
