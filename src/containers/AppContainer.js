import React, {Component} from "react";
import { Carousel } from "../components";
import "../styles/index.scss"

export class AppContainer extends Component {
    render() {
        return(
            <div className="app-container">
                <Carousel/>
            </div>
        )
    }
}