import { Card, Button } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavourite } from "../../store/actions/Favourite";
import WeatherItem from "./WeatherItem";

const toFahrenheit = (e) => {
  return (((e - 273.15) * 9) / 5 + 32).toFixed(0);
};

const toCelsius = (e) => {
  return (e - 273.15).toFixed(0);
};

function WeatherCard() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.uiState.weatherReducer);
  const [hasFavourite, setHasFavourite] = useState(false);
  const [temp, setTemp] = useState(toFahrenheit(weatherData.data.main.temp));
  const [unit, setUnit] = useState("F");

  const handleFavourite = async () => {
    await dispatch(addToFavourite(weatherData));
  };

  const favourites = useSelector(
    (state) => state.uiState.favouriteReducer?.favourite
  );

  React.useEffect(() => {
    setHasFavourite(false);
    favourites.forEach((element) => {
      if (element?.data?.name === weatherData?.data?.name) {
        setHasFavourite(true);
      }
    });
  }, [favourites, weatherData]);

  const coversion = (e) => {
    if (e === "F") {
      setTemp(toFahrenheit(weatherData.data.main.temp));
    } else {
      setTemp(toCelsius(weatherData.data.main.temp));
    }
    setUnit(e);
  };

  return (
    <Card className="col-xs-12">
      <div className="flex mb-2 height33">
        <h5 className="weight800 color-gray mb-0">
          {weatherData.data.name}
          <span
            onClick={() => coversion("F")}
            className={
              unit === "F"
                ? "color-black underline weight800 pointer-n ml-4 mr-1"
                : "color-black weight800 pointer ml-4 mr-1"
            }
          >
            {" "}
            F
          </span>
          <span className="weight400 pointer-n"> | </span>
          <span
            onClick={() => coversion("C")}
            className={
              unit === "C"
                ? "color-black underline weight800 pointer-n ml-1"
                : "color-black weight800 pointer ml-1"
            }
          >
            {" "}
            C
          </span>
        </h5>
        {!hasFavourite ? (
          <Button onClick={handleFavourite} type="primary">
            Add to Favourites
          </Button>
        ) : (
          ""
        )}
      </div>

      <div className="row">
        <div className="col-md-6">
          <h1 className="weight600 font80 mb-4 lh-66">{temp}°</h1>
          <div className="capitalize">
            <h5 className="mb-0">{weatherData.data.weather[0].main}</h5>
            <h6 className="color-gray">
              {weatherData.data.weather[0].description}
            </h6>
          </div>
        </div>
        <div className="col-md-6 ">
          <WeatherItem label="Precipitation" value="N/A" />
          <WeatherItem
            label="Humidity"
            value={`${weatherData.data.main.humidity} %`}
          />
          <WeatherItem
            label="Wind"
            value={`${weatherData.data.wind.speed} mph`}
          />
          <WeatherItem
            label="Pressue"
            value={`${weatherData.data.main.pressure} hPa`}
          />
        </div>
      </div>
    </Card>
  );
}

export default WeatherCard;
