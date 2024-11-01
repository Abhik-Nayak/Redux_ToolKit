// Basic (order ,restock cake and order , restock icecream)
// using middleware redux logger
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Example reducer
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create store with logger middleware
const store = createStore(
  counterReducer,
  applyMiddleware(logger) // Using applyMiddleware to apply logger
);

// Dispatch actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

// Log the final state
console.log("Final State: ", store.getState());
