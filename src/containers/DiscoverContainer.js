import React, {Component} from "react";
import { NavigationContainer  } from ".";
import { Carousel } from "../components";

export class DiscoverContainer extends Component {
    render() {
        const { popularAlbums, popularArtists, callback } = this.props;
        return(
            <div className="main-container">
               <NavigationContainer />
               <div className="discover-info">
                    <h1>Bruno Mars: 24K Magic</h1>
                    <p>Bruno Mars walks us through his 'funky' new album, '24K Magic'.
                    <br/>
                        He has one goal: "I wanna make funky music."
                    </p>
                    <div className="buttons">
                        <button className="play">Play</button>
                        <button>Follow</button>
                    </div>
               </div>
               <Carousel title="Popular Albums" carouselName="popular-album" items={popularAlbums} callback={callback}/>
               <Carousel title="Popular Artists" carouselName="popular-artists" items={popularArtists}/>
            </div>
        )
    }
}