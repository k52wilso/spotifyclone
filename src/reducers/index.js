import { combineReducers } from 'redux';
import { albumsReducer } from "./albumsReducer";
import { notification } from "./notificationReducer";
import { changeViewReducer} from "./changeViewReducer";
import { changeSongReducer } from "./songReducer";
import { historyReducer } from "./historyReducer";

const rootReducer = combineReducers({
    albums: albumsReducer,
    notification,
    song: changeSongReducer,
    view: changeViewReducer,
    history: historyReducer
});

export default rootReducer;