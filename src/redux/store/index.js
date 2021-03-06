import reducer from '../reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.log('dispatching', action);
    next(action);
    console.log('next state', store.getState());
}

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

export default store;