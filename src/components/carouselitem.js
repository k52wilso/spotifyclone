import React, {Component} from "react";

export class CarouselItem extends Component {
    render() {
        const { item, callback } = this.props;
        const imageURL = item && item.imageURL ? item.imageURL : "./images/bruno.jpg"; 
        const title = item && item.title ? item.title : undefined;
        const name = item && item.name ? item.name : undefined;
        return(
            <div className="carousel-item" onClick={callback}>
                <img src={imageURL} alt="image" />
                 <h4>{title || name}</h4>
            </div>
        )
    }
}