import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    screen: "discover"
};

handlers[ACTIONTYPES.CHANGE_VIEW] = (state, payload) => {
    return {
        ...state,
        screen: payload
    };
};

export const changeViewReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONTYPES.CHANGE_VIEW:
          return handlers[type](state, payload);
        default:
          return state;
    }
}