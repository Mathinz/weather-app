import { Card, Button } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavourite } from "../../store/actions/Favourite";

function WeatherCard() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.uiState.weatherReducer);
  const [hasFavourite, setHasFavourite] = useState(false);
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

  return (
    <Card>
      <h2 className="weight600 flex">
        {weatherData.data.name}{" "}
        {!hasFavourite ? (
          <Button onClick={handleFavourite} type="primary">
            Add to Favourites
          </Button>
        ) : (
          ""
        )}
      </h2>
      <div className="row">
        <div className="col-md-6">
          <h1>{weatherData.data.main.temp} F</h1>
          <h5>{weatherData.data.weather[0].main}</h5>
        </div>
        <div className="col-md-6 ">
          <h5>Precipitation N/A</h5>
          <h5>Humidity {weatherData.data.main.humidity} %</h5>
          <h5>Wind {weatherData.data.wind.speed} mph</h5>
          <h5>Pressue {weatherData.data.main.pressure} hPa</h5>
        </div>
      </div>
    </Card>
  );
}

export default WeatherCard;
