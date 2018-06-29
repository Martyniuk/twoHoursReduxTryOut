// Types
import types from './action_types.js';

export default Object.freeze({
    LOG_IN: (user) => {

        return {
            type:    types.LOG_IN,
            payload: user,
        };
    },
    LOG_IN_SUCCESS: (token) => ({
        type:    types.LOG_IN_SUCCESS,
        payload: token,
    }),
    LOG_IN_FAIL: (error) => ({
        type:    types.LOG_IN_FAIL,
        error:   true,
        payload: error,
    }),
});
