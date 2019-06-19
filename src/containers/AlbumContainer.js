import React, {Component} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getArtist, getAlbumSongs, changeSong, changeView, addToHistory } from "../actions";
import { OverflowMenu, OverflowMenuItem } from "carbon-components-react"; 
import _ from "lodash";

const mapStateToProps = (state, props) => {
    return {
        history : state.history
    }
};

const mapDispatchToProps = dispatch => ({
    changeSong: (details) => changeSong(details)(dispatch),
    changeView: (view) => changeView(view)(dispatch),
    addToHistory: (view) => addToHistory(view)(dispatch)
});

export class AlbumContainerConnect extends Component {

    constructor() {
        super();
        this.state = {
            artist: {},
            songs: [],
            history: []
        }

        this._changeSong = this._changeSong.bind(this);
        this._changeView = this._changeView.bind(this);
    }

    componentWillReceiveProps(nextProps) {
            getArtist(nextProps.album.artist_id).then(artist => {
                this.setState({
                    artist
                });
            });
            getAlbumSongs(nextProps.album.id).then(songs => {
                this.setState({
                    songs
                })
            });
    }

    _changeSong(song) {
        const { changeSong } = this.props;
        changeSong(song);
    }

    _changeView(view) {
        const { changeView,addToHistory } = this.props;
        changeView(view).then(() => {
            addToHistory(view);
        })
    }

    render() {
        const { album, history } = this.props;
        const { artist,songs} = this.state;
        return (album && artist && songs) ? (
            <div className="album-container">
               {(<div className="breadcrumbs">
                    <i className="fas fa-home" onClick={this._changeView.bind(this, "discover")}></i>
                    {history && history.path && history.path.length > 0 && history.path.map((p) => {
                        return (
                            <div key={`breadcrumb-${p}`} className="breadcrumb">
                                <i className="fas fa-chevron-left"></i>
                                {p}
                            </div>
                        )
                    })}
               </div>)}
               <div className="album-info">
                    <div className="info">
                        <h1>{album.title}</h1>
                        <h2>{artist.name}</h2>
                        <p>{album.year}</p>
                        <p><i className="far fa-clock"></i>{album.length}</p>
                    </div>
                    <img src={album.imageURL} alt="album image"/>
               </div>
               <div className="songs">
                    {songs.map((song, index) => {
                        return (
                            <div key={`album-song-${song.id}`}className="song" onClick={this._changeSong.bind(this,song)}>
                                <div className="info">
                                    <h4>{`0${index + 1}`}</h4>
                                    <p className="title">{song.title}</p>
                                    <OverflowMenu>
                                        <OverflowMenuItem className="menu-item" itemText="Add to Playlist" primaryFocus/>
                                        <OverflowMenuItem className="menu-item" itemText="Share" primaryFocus/>
                                    </OverflowMenu>
                                </div>
                                <div className="length-box">
                                    <p>{song.length}</p>
                                </div>
                            </div>
                        );
                    })}
               </div>
            </div>
        ) : null;
    }
}

AlbumContainerConnect.propTypes = {
    // album: PropTypes.object.isRequired
};

export const AlbumContainer = connect(
    null, mapDispatchToProps
)(AlbumContainerConnect);