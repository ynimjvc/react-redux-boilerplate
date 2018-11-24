import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import ModuleReducers from './modules/reducers';

const usedMiddleware = [thunk];

/* eslint-disable no-undef */
if (REDUX_LOGGING) {
    usedMiddleware.push(logger);
}
/* eslint-enable no-undef */

const combinedReducers = combineReducers(ModuleReducers);
const middleware = applyMiddleware(...usedMiddleware);

export default createStore(combinedReducers, middleware);
