import React, {Component} from "react";

export class CarouselItem extends Component {
    render() {
        return(
            <div className="carousel-item">
                <img src="/images/bruno.jpg" alt="image" />
                 <h4>Bruno Mars</h4>
            </div>
        )
    }
}