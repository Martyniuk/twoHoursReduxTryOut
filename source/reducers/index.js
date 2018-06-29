// Core
import { combineReducers } from 'redux';

// Instruments
import { loginReducer } from './login';

export const rootReducer = combineReducers({
    loginReducer,
});
