import axios from "axios";

function getWeatherData(city, cc) {
  const url = `https://jr-weather-api-v1.herokuapp.com/api/weather/${cc}/${city}`;
  return axios.get(url);
}

export default getWeatherData;
