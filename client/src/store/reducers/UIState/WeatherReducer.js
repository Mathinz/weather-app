const defaultState = null;
const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "WEATHER_SUCCESS": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default weatherReducer;
