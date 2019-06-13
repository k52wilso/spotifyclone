import React, {Component} from "react";
import { CarouselItem } from "./carouselitem"

export class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            title: "Popular Albums",
            items: [1,2,3,4,5,6]
        };
    }
    render() {
        const {items, title} = this.state;
        return(
           <div className="popular-album-carousel">
                <div className="header">
                    <h1 className="title">{title}</h1>
                    <div className="chevrons">
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
                <div className="section">
                    {items.map(item => <CarouselItem />)}
                </div>
           </div>
        )
    }
}