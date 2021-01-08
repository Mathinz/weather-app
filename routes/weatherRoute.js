const express = require('express');
const weatherRouter = express.Router();
const weatherController = require('../controllers/weatherController');

const GENERIC_ERR = 'Something went wrong, please try again';

weatherRouter.get('/weather', async (req, res) => {
  try {
    const result = await weatherController.getWeatherByZipCode(req.query.zip);
    return res.status(200).send({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || GENERIC_ERR,
    });
  }
});

module.exports = weatherRouter;
