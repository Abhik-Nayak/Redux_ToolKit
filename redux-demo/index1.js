// Basic (restock cake)
import { configureStore } from "@reduxjs/toolkit";
import { bindActionCreators } from "redux";

// Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// Action Creators
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
  pendingOrders: 0,
};

// Reducer
const reducer = (state = initialState, action) => {
  console.log(action.type, "=", action.payload);
  switch (action.type) {
    case CAKE_ORDERED:
      if (state.numOfCakes >= action.payload) {
        return {
          ...state,
          numOfCakes: state.numOfCakes - action.payload,
        };
      } else {
        // If not enough stock, increase pending orders
        return {
          ...state,
          pendingOrders:
            state.pendingOrders + (action.payload - state.numOfCakes),
          numOfCakes: 0, // Set available stock to 0
        };
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

// Create store using configureStore
const store = configureStore({ reducer });
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

// store.dispatch(orderCake(2));  // numOfCakes: 8
// store.dispatch(orderCake());     // numOfCakes: 7
// store.dispatch(orderCake());     // numOfCakes: 6
// store.dispatch(restockCake(3));  // numOfCakes: 9
// store.dispatch(restockCake(3));  //numofCakes: 12
// exept these upper 5 line we can call using bindActionCreator

const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
actions.orderCake(19);
actions.orderCake();
actions.restockCake(12);
actions.orderCake();
actions.restockCake(12);
actions.orderCake();

unsubscribe();
