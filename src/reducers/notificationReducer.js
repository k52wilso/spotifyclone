import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    isWaiting: false,
    waitingActionTypes: []
};

handlers[ACTIONTYPES.NOTIFICATION_START_WAITING] = (state, payload) => {
    const newWaitingActionTypes = [...state.waitingActionTypes];
    newWaitingActionTypes.push(payload.type);
    return {
        ...state,
        waitingActionTypes: newWaitingActionTypes,
        isWaiting: true
    };
};

handlers[ACTIONTYPES.NOTIFICATION_STOP_WAITING] = (state, payload) => {
    const index = state.waitingActionTypes.indexOf(payload.type);
    const newWaitingActionTypes = [...state.waitingActionTypes];
    if (index !== -1) newWaitingActionTypes.splice(index,1);
    return {
        ...state,
        waitingActionTypes: newWaitingActionTypes,
        isWaiting: newWaitingActionTypes.length > 0 ? true : false
    }
};

export const notification = (state = initialState, action) => {
    const { type, payload } = action
    const index = state.waitingActionTypes.indexOf(type);
    if (state.isWaiting && state.waitingActionTypes && index > -1) {
        return state;
    }
    switch (type) {
        case ACTIONTYPES.NOTIFICATION_START_WAITING:
          return handlers[type](state, payload);
        case ACTIONTYPES.NOTIFICATION_STOP_WAITING:
          return handlers[type](state, payload);
        default:
          return state;
    }
}