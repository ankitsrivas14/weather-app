import React from "react";
import { Container, LocationIcon, SearchIcon, Input, ResultsList, Result, ResultWeather, Icon } from "./styles";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "../Text";
import { getCelsius, getImageName } from "../../utils";

const Autocomplete = ({ onChange, locations, onClick }) => {
  return (
    <Container>
      <LocationIcon>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </LocationIcon>
      <Input onChange={onChange} value={locations.query} />
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
      {
        locations.results.length && locations.weathers.length
          ? (
            <ResultsList>
              {
                locations.results.map(r => {
                  const weather = locations.weathers.find(w => w.locationName === r.name);
                  return (
                    <Result key={r.name} onClick={() => onClick(r)}>
                      {console.log(r.name, locations.query)}
                      <Text capitalize>
                        {r.name.slice(0, r.name.toUpperCase().indexOf(locations.query.toUpperCase()))}
                        <Text bold capitalize>{locations.query}</Text>
                        {r.name.slice(r.name.toUpperCase().indexOf(locations.query.toUpperCase()) + locations.query.length)}
                        <Text faded> {r.state}</Text>
                      </Text>
                      {
                        weather
                        && (
                          <ResultWeather>
                            <div>
                              <Text>{getCelsius(weather.main.temp)}° C</Text>
                              <Text faded>{weather.weather[0].main}</Text>
                            </div>
                            <Icon src={`/images/${getImageName(weather.weather[0].main)}`} alt={weather.weather[0].main} />
                          </ResultWeather>
                        )
                      }
                    </Result>
                  )
                })
              }
            </ResultsList>
          )
          : null
      }
    </Container>
  )
}

export default Autocomplete;
