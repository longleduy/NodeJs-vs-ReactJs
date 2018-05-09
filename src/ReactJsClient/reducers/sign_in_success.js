import * as ActionTypes from '../contants/ActionTypes';

const _initialState = {
    user_name: ""
}
const sign_in_success = (state = _initialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGN_IN_SUCCESS:
            return { ...state,user_name: action.data };
        default:
            return { ...state };
    }
}
export default sign_in_success;