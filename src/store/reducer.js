import { WEATHER_DAY_SELECTED, WEATHER_LOCATION_QUERY, WEATHER_ERROR, WEATHER_FETCHING, WEATHER_LOCATION_SELECTED, WEATHER_LOCATION_WEATHER_SUCCESS, WEATHER_LOCATION_FETCHING, WEATHER_LOCATION_SUCCESS, WEATHER_SUCCESS, WEATHER_LOCATION_WEATHER_FETCHING } from './actions';

export const initialState = {
  locations: {
    fetching: false,
    query: '',
    weathers: [],
    results: [],
  },
  selectedDay: 0,
  weather: {
    fetching: true,
    error: true,
    hourly: [],
    daily: [],
  }
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_LOCATION_QUERY:
      return { ...state, locations: { ...state.locations, query: action.payload } };
    case WEATHER_LOCATION_FETCHING:
      return { ...state, locations: { ...state.locations, fetching: true, results: [], weathers: [] } };
    case WEATHER_LOCATION_SUCCESS:
      return { ...state, locations: { ...state.locations, fetching: false, ...action.payload } };
    case WEATHER_LOCATION_SELECTED:
      return { ...state, locations: { ...state.locations, query: `${action.payload.name}, ${action.payload.state}`, results: [], weathers: [] } };
    case WEATHER_LOCATION_WEATHER_FETCHING:
      return { ...state, locations: { ...state.locations, fetching: true, weathers: [] } };
    case WEATHER_LOCATION_WEATHER_SUCCESS:
      return { ...state, locations: { ...state.locations, weathers: [...state.locations.weathers, ...action.payload] } };
    case WEATHER_FETCHING:
      return { ...state, weather: { ...state.weather, fetching: true, selectedDay: 0, hourly: [], daily: [] } };
    case WEATHER_SUCCESS:
      return { ...state, weather: { ...state.weather, fetching: false, hourly: action.payload.hourly, daily: action.payload.daily } };
    case WEATHER_ERROR:
      return { ...state, weather: { ...state.weather, fetching: false, error: true, hourly: [], daily: [] } };
    case WEATHER_DAY_SELECTED:
      return { ...state, selectedDay: action.payload };
    default:
      return state;
  }
};
