const axios = require('axios');
const GENERIC_ERR = `Something went wrong, please try again`;

module.exports = {
  getWeatherByZipCode: async (zip) => {
    if (!zip) throw new Error(`zip code is required`);
    const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=655dfc390726be35679ee1f171b45301`;
    try {
      let weatherData = await axios.get(openWeatherUrl);
      if (weatherData && weatherData.data) return weatherData.data;
      return `No data found`;
    } catch (error) {
      if (error.response.data.cod && error.response.data.cod === '404')
        throw new Error(`Invalid zip code, city not found.`);
      throw new Error(error.message || GENERIC_ERR);
    }
  },
};
