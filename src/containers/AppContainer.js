import React, {Component} from "react";
import {MainContainer, MusicContainer, SideContainer} from ".";
import { Carousel } from "../components";
import "../styles/index.scss"

export class AppContainer extends Component {
    render() {
        return(
            <div className="app-container">
                <SideContainer/>
                <MainContainer />
                <MusicContainer />
            </div>
        )
    }
}