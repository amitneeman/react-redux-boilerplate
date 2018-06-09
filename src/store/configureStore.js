import { createStore, compose, applyMiddleware } from 'redux';
import {rootReducer} from './reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let composeEnhancers = compose;

// For development
composeEnhancers = compose;

const configureStore = () => {

    const middlewares = [
        thunk
    ];

    const enhancers = [
        composeWithDevTools(applyMiddleware(...middlewares))
    ];

    const store = createStore(
        rootReducer,
        composeEnhancers(...enhancers)
      );

    return store;
}

export default configureStore;