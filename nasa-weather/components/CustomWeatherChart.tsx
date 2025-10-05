import React from "react";
import { Box, Text } from "native-base";
import { LineChart } from "react-native-gifted-charts";

const CustomWeatherChart = () => {
  return (
    <Box bg="white" rounded="lg" p="4" shadow="2" mt="4">
      <Text fontSize="md" fontWeight="bold" mb="4">
        Bezier Line Chart (Gifted Charts)
      </Text>
      <LineChart
            data={[{ value: 2, label: 'Mon' }, { value: 3, label: 'Tue' }, { value: 0, label: 'Wed' }, { value: 3, label: 'Thu' }, { value: 7, label: 'Fri' }, { value: 2, label: 'Sat' }, { value: 5, label: 'Sun' }]}
            curved
            areaChart
            height={150}
            width={330}
            color="#0288d1"
            thickness={3}
            dataPointsColor="#0288d1"
            showVerticalLines
            hideRules
            // rulesType="solid"
            // rulesColor="#d7d7d7ff"
            // verticalLinesColor="#b3e5fc"
            xAxisColor="#ffffffff"
            yAxisColor="#ffffffff"
            startFillColor="#4fc3f7"
            endFillColor="#e0f7fa"
            startOpacity={0.9}
            endOpacity={0.1}
            xAxisLabelTextStyle={{fontSize:10, color:'#ffffffff', fontWeight:'500'}}
            yAxisTextStyle={{fontSize: 8, color: '#818181ff'}}
      />
    </Box>
  );
};

export default CustomWeatherChart;
