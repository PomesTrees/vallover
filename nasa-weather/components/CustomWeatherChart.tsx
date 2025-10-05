
import React from "react";
import { Box, Text } from "native-base";
import { LineChart } from "react-native-gifted-charts";

type ChartData = { value: number; label: string }[];

interface CustomWeatherChartProps {
  data: ChartData;
  title?: string;
  color?: string;
}

const CustomWeatherChart: React.FC<CustomWeatherChartProps> = ({ data, title = "Bezier Line Chart", color = "#0288d1" }) => {
  return (
    <Box bg="#27272a" w="400px" h="230px" rounded="lg" m={2} p="2" shadow="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
      <Text fontSize="md" fontWeight="bold" mb="4" color={"#ffffff"}>
        {title}
      </Text>
      <Box w="100%" h="140px" alignItems="center" justifyContent="center">
        <LineChart
          data={data}
          curved
          areaChart
          height={120}
          width={340}
          color={color}
          thickness={3}
          dataPointsColor={color}
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
