import axios from 'axios';

const API_KEY = '52368f5177d2087abd1929a3316b6701';

export default {
  getCurrentWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    return axios.get(url);
  }
}
