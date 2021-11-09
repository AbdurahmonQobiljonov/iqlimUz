const initialState = {
  item: null,
  isLoaded: false,
};
const WeatherData = (state = initialState, action) => {
  if (action.type === "SET_WEATHER_DAY") {
    return {
      ...state,
      item: action.payload,
      isLoaded: true,
    };
  }
  return state;
};
export default WeatherData;
