const defaultState = {
  favourite: [],
};
const favouriteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE": {
      //   let index = state.favourite.findIndex(
      //     (el) => el.name == action.payload.name
      //   );
      let found = false;
      state.favourite.forEach((item) => {
        if (item.data.name === action.payload.data.name) {
          found = true;
        }
      });
      if (found === false) {
        return {
          ...state,
          favourite: [...state.favourite, action.payload],
        };
      } else {
        return state;
      }
    }
    case "REMOVE_FAVOURITE": {
      return {
        ...state,
        favourite: state.favourite.filter((index) => index !== action.payload),
      };
    }
    default:
      return state;
  }
};
export default favouriteReducer;
