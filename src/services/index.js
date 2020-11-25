import locations from "../data/locations";
import axios from "axios";

export const locationsArray = JSON.parse(locations);

export const getLocations = (query) => {
  return locationsArray.filter(l => l.name.toLowerCase().includes(query.toLowerCase()));
}

export const getWeatherShort = async (loc) => {
  return axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: loc.lat,
      lon: loc.lon,
      appid: '6cc6ac631730d728804ec2ccecb4f575'
    }
  });
}

export const getWeather = async (loc) => {
  return axios.get('http://api.openweathermap.org/data/2.5/onecall', {
    params: {
      lat: loc.lat,
      lon: loc.lon,
      cnt: 20,
      appid: '6cc6ac631730d728804ec2ccecb4f575'
    }
  });
}