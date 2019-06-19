import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    details: {},
    allSongs: []
};

handlers[ACTIONTYPES.CHANGE_SONG] = (state, payload) => {
    return {
        ...state,
        details: {...payload}
    };
};

handlers[ACTIONTYPES.GET_ALL_SONGS] = (state, payload) => {
    return {
        ...state,
        allSongs: [...payload]
    }
}

export const changeSongReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONTYPES.CHANGE_SONG:
            return handlers[type](state, payload);
        case ACTIONTYPES.GET_ALL_SONGS:
            return handlers[type](state, payload);
        default:
          return state;
    }
}