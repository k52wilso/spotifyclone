
import AlbumsJSON from "../database/albums.json";
import ArtistsJSON from "../database/artists.json";
import SongsJSON from "../database/songs.json";
import _ from "lodash";

export class AppService {

	static changeSong(details) {
		const songs = SongsJSON.songs;
		const artists = ArtistsJSON.artists;
		const albums = AlbumsJSON.albums;
		const song = _.filter(songs, {id: details.id});
		const album = _.find(albums, {id: song[0].album_id});
		const artist = _.find(artists, {id: album.artist_id});
		const songWithImage = {
			...song[0],
			artist: artist.name,
			image: album && album.imageURL ? album.imageURL : "images/default_album.jpg"
		};
		return new Promise(resolve => {
			resolve(songWithImage);
		}); 
	}

	static getAllSongs() {
		const songs = SongsJSON.songs;
		const albums = AlbumsJSON.albums;
		const songsWithImages = songs.map((song) => {
			const album = _.find(albums, {id: song.album_id});
			return {
				...song,
				image: album.imageURL ? album.imageURL : "images/default_album.jpg"
			}
		});
		return new Promise(resolve => {
			resolve(songsWithImages);
		}); 
	}

	static getAlbums(queryBy){
		if (queryBy) {
			const albums = AlbumsJSON.albums;
			const results = _.find(albums, queryBy);
			return new Promise(resolve => {
				resolve(results);
			});
		} else {
			const albums = AlbumsJSON.albums;
			return new Promise(resolve => {
				resolve(albums);
			});
		}
	}

	static getAlbumSongs(albumId) {
		const songs = SongsJSON.songs;
		const albumSongs = _.filter(songs, {album_id: albumId});
		return new Promise(resolve => {
			resolve(albumSongs);
		}); 
	}

	static getAlbum(albumId) {
		const albums = AlbumsJSON.albums;
		const results = _.find(albums, {album_id: albumId});
		return new Promise(resolve => {
			resolve(results[0]);
		});
	}


	static getArtist(id) {
		const artists = ArtistsJSON.artists;
		const artist = _.find(artists, {id});
		return new Promise(resolve => {
			resolve(artist);
		});
	}

	static getArtists(queryBy){
		if (queryBy) {

		} else {
			const artists = ArtistsJSON.artists;
			return new Promise(resolve => {
				resolve(artists);
			});
		}
	}
}