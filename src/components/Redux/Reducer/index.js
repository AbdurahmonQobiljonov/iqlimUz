import { combineReducers } from "redux";

import WeatherReduser from "./setWeatherDay";
import CitiesData from "./setCities";

const rootReducer = combineReducers({
  WeatherData: WeatherReduser,
  WeatherCities: CitiesData,
});
export default rootReducer;
