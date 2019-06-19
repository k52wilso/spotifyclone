import { ACTIONTYPES } from "../utils/actionTypes";
import { AppService } from "../services";
export const changeSong = (details) => {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload:{type: ACTIONTYPES.CHANGE_SONG}});
        return AppService.changeSong(details).then(song => {
            dispatch({type: ACTIONTYPES.CHANGE_SONG, payload: song});
            dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.CHANGE_SONG}});
        });
    }
};

export const getAllSongs = () => {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload:{type: ACTIONTYPES.GET_ALL_SONGS}});
        return AppService.getAllSongs().then(songs => {
            dispatch({type: ACTIONTYPES.GET_ALL_SONGS, payload: songs});
            dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.GET_ALL_SONGS}});
        });
    }
}