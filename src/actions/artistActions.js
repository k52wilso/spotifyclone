import { AppService } from "../services";

export const getArtists = (queryBy) => {
    return AppService.getArtists(queryBy);
}

export const getArtist = (id) => {
    return AppService.getArtist(id);
}