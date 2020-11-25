import React from "react";
import {
  AreaChart, Area, XAxis, CartesianGrid, Tooltip,
} from "recharts";
import Text from "../Text";
import moment from "moment";
import { ChartContainer, StatsContainer, Stat } from "./styles";

const data = [
  { "name": "5am", "value": 0 },
  { "name": "", "value": 0 },
  { "name": "2am", "value": 1 },
  { "name": "", "value": 0 },
  { "name": "6pm", "value": 0 }
];

const SunriseChart = ({ sunrise, sunset }) => {
  return (
    <ChartContainer>
      <StatsContainer>
        <Stat>
          <Text bold>Sunrise</Text>
          <Text faded>{moment(sunrise * 1000).format('h:ma')}</Text>
        </Stat>
        <Stat>
          <Text bold>Sunset</Text>
          <Text faded>{moment(sunset * 1000).format('h:ma')}</Text>
        </Stat>
      </StatsContainer>
      <AreaChart
        width={736}
        height={200}
        margin={{ right: 10, left: 18 }}
        layout="horizontal"
        stackOffset="none"
        barCategoryGap="10%"
        barGap={4}
        reverseStackOrder={false}
        data={data}
      >
        <defs>
          <linearGradient id="time" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F7E0AF" stopOpacity="0.6"></stop>
            <stop offset="90%" stopColor="#F7E0AF" stopOpacity="0.1"></stop>
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          tickLine={false}
          domain={[0, 1, 2, 3, 4]}
          duplicateDomain={["5am", "", "2am", "", "6pm"]}
          stroke="#666"
        />
        <Area
          type="basisClosed"
          dataKey="value"
          fill="url(#time)"
          fillOpacity={0.6}
          legendType="line"
          dot={false}
          stroke="#FEDB41"
          height={170}
        />
      </AreaChart>
    </ChartContainer>
  );
}

export default SunriseChart;