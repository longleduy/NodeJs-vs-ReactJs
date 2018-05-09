import * as ActionTypes from '../contants/ActionTypes';
import callApi from '../utils/api_caller';
export const sign_in_success_act = (data) => {
    return{
        type: ActionTypes.SIGN_IN_SUCCESS,
        data
    }
}
export const actFetchDataApiReques = () => {
    return (dispatch) => {
        return callApi('items', 'GET', null)
            .then(res => {
                actFetchDataApiRedux(res.data);
            })
    }
}
