// Immutable
import { Map } from 'immutable';

// Action types
import types from '../../actions/action_types';

const initialState = Map({
    isAuthenticated: false,
});

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN_SUCCESS:
            return state.set('isAuthenticated', true);
        default:
            return state;
    }
};
