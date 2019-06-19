import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    path: [],
    search: []
};

handlers[ACTIONTYPES.ADD_TO_HISTORY] = (state, payload) => {
    if (state.path.includes(payload)) {
        let currentPath = [...state.path];
        currentPath.pop();
        return {
            ...state,
            path: currentPath
        }
    }
    return {
        ...state,
        path: [...state.path, payload]
    };
};

handlers[ACTIONTYPES.REMOVE_FROM_HISTORY] = (state, payload) => {
    const currentPath = [...state.path];
    currentPath.pop();
    return {
        ...state,
        path: currentPath
    }
}

export const historyReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONTYPES.ADD_TO_HISTORY:
            return handlers[type](state, payload);
        case ACTIONTYPES.REMOVE_FROM_HISTORY:
            return handlers[type](state, payload);
        default:
          return state;
    }
}