
import { ACTIONTYPES } from "../utils/actionTypes";

export const addToHistory = (view) => {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.ADD_TO_HISTORY, payload: view});
    }
}

export const removeFromHistory = (view) => {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.REMOVE_FROM_HISTORY, payload: view});
    }
}

