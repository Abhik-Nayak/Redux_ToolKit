import { createStore, combineReducers, applyMiddleware} from 'redux';
// createStore is a function from Redux used to create the store.
// combineReducers is a function from Redux used to combine multiple reducers into a single reducer.
// applyMiddleware is a function from Redux used to apply middleware to the store.
import thunk from 'redux-thunk';
// thunk is a middleware that allows writing asynchronous logic in Redux action creators.
import { composeWithDevTools } from "redux-devtools-extension";
// composeWithDevTools is a function from the Redux DevTools Extension package used to enhance the store with DevTools capabilities.
import { todosReducers } from './reducers/todosReducer';


const reducer = combineReducers({
    todos: todosReducers
})
// The combineReducers function is used to combine multiple reducers into a single reducer. In your example, the todosReducers is 
// combined as the todos key in the root reducer.

const middleware = [thunk];
// The thunk middleware is added to the middleware array. This middleware enables dispatching asynchronous actions in Redux.

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleware))
)
// The createStore function is called with the root reducer and the composed middleware using composeWithDevTools from Redux DevTools Extension.
//  This enhances the store with the ability to use Redux DevTools for debugging and inspecting the state and actions.

export default store;

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import { todosReducers } from './reducers/todosReducer';
// import { tabReducer } from './reducers/tabReducer';

// const reducer = combineReducers({
//     todos: todosReducers,
//     currentTab: tabReducer
// })


// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store;