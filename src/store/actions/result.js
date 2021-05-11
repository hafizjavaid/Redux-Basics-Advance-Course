import * as actionTypes from "./actions";

export const saveResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result,
  };
};
export const storeResult = (result) => {
  // This dispatching of action is possible
  // due to redux-thunk
  return (dispatch, getState) => {
    
    // Using State within Action Creators ( Altough it's not
    // good practice)
    const oldCounter = getState().ctr.counter;
    console.log(oldCounter);
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};
export const delResult = (id) => {
  return {
    type: actionTypes.DEL_RESULT,
    id,
  };
};
