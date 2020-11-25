import React from "react";
import { Container, Stat } from "./styles";
import Text from "../Text";

const WheatherStats = ({ pressure, humidity }) => {
  return (
    <Container>
      <Stat>
        <Text bold>Pressure</Text>
        <Text>{pressure} hpa</Text>
      </Stat>
      <Stat>
        <Text bold>Humidity</Text>
        <Text>{humidity} %</Text>
      </Stat>
    </Container>
  )
};

export default WheatherStats;
