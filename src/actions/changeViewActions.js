import { ACTIONTYPES } from "../utils/actionTypes";

export const changeView = (view,id) => {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload:{type: ACTIONTYPES.CHANGE_VIEW}});
        return new Promise(resolve => {
            dispatch({type: ACTIONTYPES.CHANGE_VIEW, payload: view});
            dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.CHANGE_VIEW}});
            resolve({view});
        });
    }
    
}