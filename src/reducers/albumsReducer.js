import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    albums: []
};

handlers[ACTIONTYPES.GET_ALL_ALBUMS] = (state, payload) => {
    if (payload instanceof Array) {
        return {
            ...state,
            albums: [...payload]
        };
    }
    return {
        ...state,
        albums: [{...payload}]
    };
};

export const albumsReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONTYPES.GET_ALL_ALBUMS:
          return handlers[type](state, payload);
        default:
          return state;
    }
}