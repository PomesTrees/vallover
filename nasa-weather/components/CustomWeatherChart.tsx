import React from "react";
import { Box, Text } from "native-base";
import { LineChart } from "react-native-gifted-charts";

const CustomWeatherChart = () => {
  return (
  <Box bg="#27272a" w="400px" h="220px" rounded="lg" m={2} p="2" shadow="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
      <Text fontSize="md" fontWeight="bold" mb="4" color={"#ffffff"}>
        Bezier Line Chart
      </Text>
        <Box w="100%" h="140px" alignItems="center" justifyContent="center">
          <LineChart
            data={[{ value: 2, label: 'Mon' }, { value: 3, label: 'Tue' }, { value: 0, label: 'Wed' }, { value: 3, label: 'Thu' }, { value: 7, label: 'Fri' }, { value: 2, label: 'Sat' }, { value: 5, label: 'Sun' }]}
            curved
            areaChart
            height={120}
            width={340}
            color="#0288d1"
            thickness={3}
            dataPointsColor="#0288d1"
            showVerticalLines
            hideRules
            verticalLinesColor="#3f3f45ff"
            xAxisColor="#27272a"
            yAxisColor="#27272a"
            startFillColor="#2178a1ff"
            endFillColor="#26505fff"
            startOpacity={0.9}
            endOpacity={0.1}
            xAxisLabelTextStyle={{fontSize:10, color:'#ffffffff', fontWeight:'500'}}
            yAxisTextStyle={{fontSize: 8, color: '#818181ff'}}
          />
        </Box>
    </Box>
  );
};

export default CustomWeatherChart;
