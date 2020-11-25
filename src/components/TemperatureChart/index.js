import React from "react";
import moment from "moment";
import {
  AreaChart, Area, XAxis, CartesianGrid, Tooltip,
} from "recharts";
import { getCelsius, getHourlyData } from "../../utils";
import { ChartContainer } from "./styles";

const TemperatureChart = ({ hourly, selectedDay }) => {
  const now = moment();
  console.log(getHourlyData(hourly, selectedDay).map((h, i) => ({
    temp: getCelsius(h.temp),
    hour: moment(h.hour * 1000).format('ha')
  })));
  return (
    <ChartContainer>
      <AreaChart
        width={1400}
        height={250}
        margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        layout="horizontal"
        stackOffset="none"
        barCategoryGap="10%"
        barGap={4}
        reverseStackOrder={false}
        data={getHourlyData(hourly, selectedDay).map((h, i) => ({
          temp: getCelsius(h.temp),
          hour: moment(h.hour * 1000).format('ha')
        }))}
      >
        <defs>
          <linearGradient id="temp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00a6fa" stopOpacity="0.6"></stop>
            <stop offset="50%" stopColor="#00a6fa" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#ccc"
          strokeOpacity={0.4}
          strokeWidth={3}
          vertical={true}
          horizontal={false}
          width={1360}
          height={210}
        />
        <XAxis dataKey="hour" tickLine={false} axisLine={false} />
        <Area
          type="monotone"
          dataKey="temp"
          fill="url(#temp)"
          fillOpacity={1}
          legendType="line"
          dot={{ "fill": "white", "r": 5, "stroke": "#00a6fa", "strokeWidth": 2 }}
          stroke="#00a6fa"
          strokeWidth={2}
          isAnimationActive={true}
        />
        <Tooltip />
      </AreaChart>
    </ChartContainer>
  );
}

export default TemperatureChart;