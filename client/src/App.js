import React from "react";
import "./App.css";
import { Layout } from "antd";
import AppHeader from "./components/Header";
import Welcome from "./components/Welcome";
import WeatherCard from "./components/WeatherCard";
import Favourites from "./components/Favourites";
import { useSelector } from "react-redux";

function App() {
  const weatherData = useSelector((state) => state.uiState.weatherReducer);
  const favourites = useSelector(
    (state) => state.uiState.favouriteReducer?.favourite
  );
  return (
    <Layout>
      <AppHeader searchBar={weatherData?.success} />
      <div className="antd-container">
        {weatherData?.success ? (
          <div className="row">
            <div className={favourites.length > 0 ? "col-md-8" : "col-md-12"}>
              <WeatherCard />
            </div>
            {favourites.length > 0 ? (
              <div className="col-md-4">
                <Favourites />
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <Welcome />
        )}
      </div>
    </Layout>
  );
}

export default App;
