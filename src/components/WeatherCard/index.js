import React, { useEffect, useState } from "react";
import { getLocations, getWeather } from "../../services";
import { getCelsius, getImageName } from "../../utils";
import SunriseChart from "../SunriseChart";
import TemperatureChart from "../TemperatureChart";
import Text from "../Text";
import WheatherStats from "../WeatherStats";
import { Container, Header, Icon } from "./styles";

const WeatherCard = ({ current, hourly, selectedDay }) => {
  return (
    <Container>
      <Header>
        <Text>{getCelsius(current.temp.max)}°C</Text>
        <Icon src={`/images/${getImageName(current.weather[0].main)}`} />
      </Header>
      <TemperatureChart hourly={hourly} selectedDay={selectedDay} />
      <WheatherStats pressure={current.pressure} humidity={current.humidity} />
      <SunriseChart sunrise={current.sunrise} sunset={current.sunset} />
    </Container>
  )
}

export default WeatherCard;
