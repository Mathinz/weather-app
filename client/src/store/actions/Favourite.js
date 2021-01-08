export const addToFavourite = (favourite) => async (dispatch) => {
  dispatch({
    type: "ADD_FAVOURITE",
    payload: favourite,
  });
};

export const removeFromFavourite = (favourite) => async (dispatch) => {
  dispatch({
    type: "REMOVE_FAVOURITE",
    payload: favourite,
  });
};
