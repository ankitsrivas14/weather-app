import React from "react";
import ForcastItem from "../ForcastItem";
import { Container } from "./styles";

const ForcastList = ({ daily, selectedDay, onClick }) => {
  return (
    <Container>
      {
        daily.map((forcast, i) => {
          const date = new Date();
          const day = new Date(date.setDate(date.getDate() + i));
          return (
            <ForcastItem
              key={i}
              forecast={forcast}
              day={day}
              checked={i === selectedDay}
              onClick={onClick}
              value={i}
            />
          );
        })
      }
    </Container>
  )
};

export default ForcastList;
