import { ACTIONTYPES } from "../utils/actionTypes";
import { AppService } from "../services";

export const getAlbums = (queryBy) => {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload:{type: ACTIONTYPES.GET_ALL_ALBUMS}});
        return AppService.getAlbums(queryBy).then(albums => {
            dispatch({type: ACTIONTYPES.GET_ALL_ALBUMS, payload: albums});
            dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.GET_ALL_ALBUMS}});
        });
    }
    
}

export const getAlbumSongs = (albumId) => {
    return AppService.getAlbumSongs(albumId);
}