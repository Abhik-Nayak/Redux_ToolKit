// Basic (order cake)
import { configureStore } from "@reduxjs/toolkit";

// action
const CAKE_ORDERED = "CAKE_ORDERED";

//action Creator
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

//(previousState, action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

// store<video 7 code evlution>
// Create store using configureStore
const store = configureStore({ reducer });
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(orderCake(2));
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();

// Learnings from the Redux Toolkit Example:
// Redux Toolkit:

// Usage of configureStore: You’ve learned to create a Redux store using configureStore from Redux Toolkit, which simplifies the store setup compared to createStore.
// Action Types and Creators:

// Defining Action Types: The action type CAKE_ORDERED is defined as a constant string, which helps avoid typos and makes the code more maintainable.
// Action Creator: The orderCake function is an action creator that returns an action object with a type and payload. This encapsulates the action creation logic.
// Initial State:

// You’ve defined an initial state (initialState) that serves as the default state of your application.
// Reducer Function:

// The reducer function takes the current state and an action, and returns a new state based on the action type. The switch statement is used to handle different action types.
// Immutability: You’ve used the spread operator (...state) to create a new state object, ensuring immutability.
// Store Creation and State Management:

// You created the Redux store with the reducer and logged the initial state to the console.
// State Subscription: The unsubscribe function is used to stop listening for state updates, demonstrating how to handle subscriptions in Redux.
// Dispatching Actions:

// You dispatched actions using store.dispatch(), showing how to update the state by calling the action creator.
// Dynamic Payloads: The action creator allows for a dynamic quantity of cakes to be ordered, demonstrating how payloads can be used in actions.
// Console Logging:

// You logged the updated state after dispatching actions, which is helpful for debugging and understanding how state changes over time.