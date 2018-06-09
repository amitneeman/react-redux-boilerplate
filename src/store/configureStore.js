import { createStore, compose, applyMiddleware } from 'redux';
import {rootReducer} from './reducers/index';
import thunk from 'redux-thunk';

let composeEnhancers = compose;

// For development
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const configureStore = () => {

    const middlewares = [
        thunk
    ];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    const store = createStore(
        rootReducer,
        composeEnhancers(...enhancers)
      );

    return store;
}

export default configureStore;