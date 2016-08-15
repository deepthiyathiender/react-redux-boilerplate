import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

//logger must be last in the middleware chain, otherwise it will log middleware and thunk promises and not the actions
//middleware is just a section between an action dispatch and reducer function
//redux middleware is usually used for logging errors, error reporting and talking to an async API
//normal dispatch will trigger action objects
//middleware helps to dispatch functions instead of just objects

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
