import React from "react";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavourite } from "../../store/actions/Favourite";
import { CloseCircleOutlined } from "@ant-design/icons";

function Favourites() {
  const dispatch = useDispatch();
  const favouriteWeathers = useSelector(
    (state) => state.uiState.favouriteReducer?.favourite
  );
  const handleRemove = (weather) => {
    dispatch(removeFromFavourite(weather));
  };
  return (
    <Card title="Favourites">
      {favouriteWeathers
        ? favouriteWeathers.map((weatherData, index) => {
            return (
              <div key={index}>
                <div className="favourite-list py-2">
                  <span
                    className="pointer"
                    onClick={() =>
                      dispatch({
                        type: "WEATHER_SUCCESS",
                        payload: weatherData,
                      })
                    }
                  >
                    {weatherData.data.name}
                  </span>
                  <CloseCircleOutlined
                    className="pointer"
                    onClick={() => handleRemove(weatherData)}
                  />
                </div>
              </div>
            );
          })
        : "Favourites"}
    </Card>
  );
}

export default Favourites;
