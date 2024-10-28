// Basic (order ,restock cake and order , restock icecream)
// combine multiple reducers to single reducers
import { configureStore } from "@reduxjs/toolkit";
import { bindActionCreators, combineReducers } from "redux";

// Action Types
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

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

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

const initialCakeState = {
  numOfCakes: 10,
  pendingOrders: 0,
};

const initialIcecreamState = {
  numOfIcecream: 10,
  pendingOrders: 0,
};

// Cake Reducer
const cakeReducer = (state = initialCakeState, action) => {
  console.log("cake",action.type, "=", action.payload);
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

// Ice Cream Reducer
const iceCreamReducer = (state = initialIcecreamState, action) => {
  console.log("icecream",action.type, "=", action.payload);
  switch (action.type) {
    case ICECREAM_ORDERED:
      if (state.numOfIcecream >= action.payload) {
        return {
          ...state,
          numOfIcecream: state.numOfIcecream - action.payload,
        };
      } else {
        // If not enough stock, increase pending orders
        return {
          ...state,
          pendingOrders:
            state.pendingOrders + (action.payload - state.numOfIcecream),
          numOfIcecream: 0, // Set available stock to 0
        };
      }
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// Create store using configureStore
const store = configureStore({ reducer: rootReducer });
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

// Bind action creators
const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

// Dispatch actions
actions.restockCake(12);
actions.orderCake(5); // Order 5 cakes
actions.orderIcecream(2); // Order 2 ice creams
actions.restockIcecream(10); // Restock 10 ice creams

unsubscribe();
