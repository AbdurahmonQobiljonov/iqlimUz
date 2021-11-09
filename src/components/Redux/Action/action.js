export const setDatas = (items) => ({
  type: "SET_WEATHER_DAY",
  payload: items,
});

export const setCities = (items) => ({
  type: "SET_CITIES",
  payload: items,
});
