import { combineReducers } from "redux";
import weatherReducer from "./WeatherReducer";
import favouriteReducer from "./FavouriteReducer";
export default combineReducers({
  weatherReducer,
  favouriteReducer,
});
