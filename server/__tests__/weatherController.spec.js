const weatherController = require('../controllers/weatherController');

describe('Weather controller', () => {
  it(`should throw an error`, async () => {
    try {
      await weatherController.getWeatherByZipCode('9210');
    } catch (thrownError) {
      expect(thrownError).toEqual(
        new Error(`Invalid zip code, city not found.`)
      );
    }
  });

  it(`should return with status code of 200`, async () => {
    const weatherData = await weatherController.getWeatherByZipCode('92110');
    expect(weatherData.cod).toEqual(200);
  });

  it(`should throw an error`, async () => {
    try {
      await weatherController.getWeatherByZipCode('9210');
    } catch (thrownError) {
      expect(thrownError).toEqual(
        new Error(`Invalid zip code, city not found.`)
      );
    }
  });
});
