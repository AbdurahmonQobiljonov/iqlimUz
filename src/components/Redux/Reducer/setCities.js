const initialState = {
  item: null,
  isLoaded: false,
};
const CitiesData = (state = initialState, action) => {
  if (action.type === "SET_CITIES") {
    return {
      ...state,
      item: action.payload,
      isLoaded: true,
    };
  }
  return state;
};
export default CitiesData;
