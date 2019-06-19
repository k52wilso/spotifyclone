import React, {Component} from "react";
import { connect } from 'react-redux';
import { OverflowMenu, OverflowMenuItem } from "carbon-components-react"; 

import { changeSong, getAllSongs } from "../actions";
import _ from "lodash";

const mapStateToProps = (state, props) => {
    return {
        songs : state.song.allSongs
    }
};

const mapDispatchToProps = dispatch => ({
    changeSong: (details) => changeSong(details)(dispatch),
    getAllSongs: () => getAllSongs()(dispatch)
});

export class SideContainerConnect extends Component {
    constructor() {
        super();
        this.state = {
            songs: [{
                id: 1,
                title: "Young and Menance",
                image: "./images/fob.jpg",
                artist: "Fall out Boy"
            },{
                id: 2,
                title: "Counting stars",
                image: "./images/onerepublic.jpg",
                artist: "One Republic"
            },{
                id: 3,
                title: "24K Magic",
                image: "./images/bruno.jpg",
                artist: "Bruno Mars"
            }]
        }
        this._changeSong = this._changeSong.bind(this);
    }

    componentWillMount() {
        const { getAllSongs } = this.props;
        getAllSongs();
    }

    _changeSong(song) {
        const { changeSong } = this.props;
        changeSong(song);
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.songs, nextProps.songs)){
            this.setState({
                songs: nextProps.songs
            })
        }
    }

    render() {
        const { songs } = this.state;
        return(
            <div className="side-container">
               <ul className="navigation">
                    <h2 className="side-title">Playlist</h2>
                    <li><i className="fas fa-music"></i>My Playlists</li>
                    <li><i className="far fa-circle"></i>Last Listening</li>
                    <li><i className="far fa-circle"></i>Recommended</li>
               </ul>
               <div className="side-songs">
                        {songs.map((song, index) => {
                            return (
                                <div key={song.id} className="song" onClick={this._changeSong.bind(this,song)}>
                                    <h4>{`0${index+1}`}</h4>
                                    <img src={song.image} alt="image"/>
                                    <div className="info">
                                        <p className="title">{song.title}</p>
                                        <p className="artist">{song.artist}</p>
                                    </div>
                                    <OverflowMenu>
                                        <OverflowMenuItem className="menu-item" itemText="Add to Playlist" primaryFocus/>
                                        <OverflowMenuItem className="menu-item" itemText="Share" primaryFocus/>
                                    </OverflowMenu>
                                </div>
                            );
                        })}
                    </div>
            </div>
        )
    }
}

export const SideContainer = connect(
    mapStateToProps, mapDispatchToProps
)(SideContainerConnect);