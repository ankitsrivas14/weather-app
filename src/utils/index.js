import moment from "moment";

export const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

export const getCelsius = (kelvin) => Math.round(kelvin - 273.15, 2);

export const getDayName = (date) => {
  console.log(date);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayName = days[date.getDay()];
  return dayName;
}

export const getImageName = (title) => {
  switch (title) {
    case 'Clouds':
      return 'cloudy.png';
    case 'Rain':
      return 'rain.png';
    default:
      return 'sun.png';
  }
};

export const getHourlyData = (hourly, selectedDay) => {
  const dayStart = moment().startOf('day').add(selectedDay, 'days').unix();
  const dayEnd = moment().endOf('day').add(selectedDay, 'days').unix();
  const hourStart = moment().startOf('hour');
  const result = [];
  hourly.forEach((h, i) => {
    const hour = moment(h.dt * 1000).unix();
    if (hour >= dayStart && hour <= dayEnd) {
      result.push({ temp: h.temp, hour });
    }
  });
  console.log(result);
  return result;
};