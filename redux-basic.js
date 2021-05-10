const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};
// Reducer ( We can say mutation same as in vuejs)
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};
// Store
const store = createStore(rootReducer);

// console.log(store.getState());

// Subscriptions
store.subscribe(()=>{

    console.log(store.getState());
})
// Actions

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
// console.log(store.getState());
// console.log({...initialState});

