import * as actionTypes from "../actions/actions";

// import {updateObject}
import { updateObject } from "../utility";
const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result }),
      });
      

    case actionTypes.DEL_RESULT:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.id
      );
      return updateObject(state, { results: updatedArray });
  }

  return state;
};

export default reducer;
