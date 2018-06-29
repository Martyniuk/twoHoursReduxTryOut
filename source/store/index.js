// Core
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Instruments
import { rootReducer } from '../reducers';
import rootSaga from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
