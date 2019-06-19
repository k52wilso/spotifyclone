import React, {Component} from "react";
import { connect } from 'react-redux';
import { NavigationContainer, DiscoverContainer } from ".";
import { Carousel } from "../components";
import { getAlbums, getArtists, changeView, addToHistory } from "../actions";
import { AlbumContainer } from "./AlbumContainer";
import _ from "lodash";

const mapStateToProps = (state, props) => {
    return {
        albums: state.albums.albums,
        view: state.view,
        history: state.history
    }
};

const mapDispatchToProps = dispatch => ({
    getAlbums: (queryBy) => getAlbums(queryBy)(dispatch),
    changeView: (view, id) => {
        if (view === "album") {
            changeView(view, id)(dispatch).then(() => {
                addToHistory(view)(dispatch);
            });
            const queryObj = {id};
            getAlbums(queryObj)(dispatch);
        }
    }
});

const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export class MainContainerConnect extends Component {
    constructor() {
        super();
        this.state = {
            popularAlbums: [],
            popularArtists: []
        }
    }

    componentWillMount() {
        const { getAlbums, albums, view } = this.props;
        if (albums.length === 0) {
            getAlbums();
        }
    }

    componentWillReceiveProps(nextProps) {
        const { albums, changeView, view, getAlbums } = this.props;
        if (view.screen !== nextProps.view.screen && nextProps.view.screen === "discover") {
            getAlbums();
        }
        if (!_.isEqual(albums, nextProps.albums)) {
            this.setState({
                popularAlbums: nextProps.albums
            });
        }
    }

    render() {
        const { popularAlbums, popularArtists } = this.state;
        const { changeView, view, albums, history } = this.props;
        return(
            <div className="main-container">
               {view && view.screen === "album" && <AlbumContainer album={albums[0]} history={history} />}
               {view && view.screen === "discover" && <DiscoverContainer popularAlbums={popularAlbums} popularArtists={popularArtists} callback={changeView}/>}
            </div>
        )
    }
}

export const MainContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainContainerConnect);