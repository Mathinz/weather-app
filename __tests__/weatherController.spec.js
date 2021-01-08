const weatherController = require('../controllers/weatherController');

describe('Weather controller', () => {
  it(`should throw zip code required`, async () => {
    try {
      await weatherController.getWeatherByZipCode();
    } catch (thrownError) {
      expect(thrownError).toEqual(
        new Error(`zip code is required`)
      );
    }
  });

  it(`should throw zip code required`, async () => {
    try {
      await weatherController.getWeatherByZipCode(null);
    } catch (thrownError) {
      expect(thrownError).toEqual(
        new Error(`zip code is required`)
      );
    }
  });

  it(`should return with status code of 200`, async () => {
    const weatherData = await weatherController.getWeatherByZipCode('92110');
    expect(weatherData.cod).toEqual(200);
  });

  it(`should throw a invalid zip code error`, async () => {
    try {
      await weatherController.getWeatherByZipCode('9210');
    } catch (thrownError) {
      expect(thrownError).toEqual(
        new Error(`Invalid zip code, city not found.`)
      );
    }
  });
});
