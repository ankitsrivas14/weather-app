import React from "react";
import { getCelsius, getDayName, getImageName } from "../../utils";
import Text from "../Text";
import { Container, Icon, Row, ForcastCard, RadioInput } from "./styles";

const ForcastItem = ({ forecast, day, checked, onClick, value }) => {
  return (
    <Container>
      <RadioInput type="radio" name="forcast-day" checked={checked} onClick={onClick} value={value} />
      <ForcastCard>
        <Row>
          <Text semibold>{getDayName(day)}</Text>
        </Row>
        <Row>
          <Text semibold>
            {getCelsius(forecast.temp.max)}°{' '}
            <Text faded>{getCelsius(forecast.temp.min)}°</Text>
          </Text>
        </Row>
        <Icon src={`/images/${getImageName(forecast.weather[0].main)}`}></Icon>
        <Row>
          <Text faded semibold>{forecast.weather[0].main}</Text>
        </Row>
      </ForcastCard>
    </Container>
  );
}

export default ForcastItem;
