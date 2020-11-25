import React, { useContext, useEffect } from 'react';
import { Container, Loader } from './styles';
import Autocomplete from '../../components/Autocomplete';
import ForcastList from '../../components/ForcastList';
import WeatherCard from '../../components/WeatherCard';
import { getWeather, getLocations, getWeatherShort, locationsArray } from '../../services';
import { WEATHER_LOCATION_QUERY, WEATHER_LOCATION_FETCHING, WEATHER_LOCATION_SUCCESS, WEATHER_LOCATION_SELECTED, WEATHER_LOCATION_WEATHER_SUCCESS, WEATHER_LOCATION_WEATHER_FETCHING, WEATHER_SUCCESS, WEATHER_DAY_SELECTED } from '../../store/actions';
import { storeContext } from '../../store';
import { debounce } from '../../utils';

const WeatherScreen = () => {
  const { store, dispatch } = useContext(storeContext);

  const onSearchClick = (item) => {
    dispatch({ type: WEATHER_LOCATION_SELECTED, payload: item });
    getWeather(item).then(resp => {
      dispatch({
        type: WEATHER_SUCCESS, payload: {
          hourly: resp.data.hourly,
          daily: resp.data.daily
        }
      });
    });
  }

  const onSearch = debounce((e) => {
    const query = e.target.value;
    if (query.trim().length && query !== store.locations.query) {
      dispatch({ type: WEATHER_LOCATION_FETCHING });
      const results = getLocations(query);
      dispatch({ type: WEATHER_LOCATION_SUCCESS, payload: { results, query } });
      dispatch({ type: WEATHER_LOCATION_WEATHER_FETCHING });
      Promise
        .all(results.map(r => getWeatherShort(r).then(resp => ({ ...resp.data, locationName: r.name }))))
        .then(resp => {
          dispatch({ type: WEATHER_LOCATION_WEATHER_SUCCESS, payload: resp });
        });
    } else {
      dispatch({ type: WEATHER_LOCATION_SUCCESS, payload: { results: [], query } });
    }
  }, 500);

  const onChange = (e) => {
    dispatch({ type: WEATHER_LOCATION_QUERY, payload: e.target.value });
    onSearch(e);
  }

  const onForcastClick = (e) => {
    dispatch({ type: WEATHER_DAY_SELECTED, payload: Number(e.target.value) });
  }

  useEffect(() => {
    onSearchClick(locationsArray[0]);
  }, [])

  return (
    <Container>
      <Autocomplete onChange={onChange} locations={store.locations} onClick={onSearchClick} />
      {
        !store.weather.fetching
          ? (
            <React.Fragment>
              <ForcastList daily={store.weather.daily} onClick={onForcastClick} selectedDay={store.selectedDay} />
              <WeatherCard current={store.weather.daily[store.selectedDay]} hourly={store.weather.hourly} selectedDay={store.selectedDay} />
            </React.Fragment>
          )
          : <Loader>Loading...</Loader>
      }
    </Container>
  );
}

export default WeatherScreen;