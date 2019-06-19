import React, {Component} from "react";
import { CarouselItem } from "./carouselitem";
import PropTypes from "prop-types";

export class Carousel extends Component {

    constructor() {
        super();

        this._changeView = this._changeView.bind(this);
    }

    _changeView(item) {
        const { callback } = this.props;
        if (callback) {
            callback(item.type, item.id);
        } else {
            console.log("click failed");
        }
    }

    render() {
        const { title, carouselName, items} = this.props;
        const carouselClass = carouselName ? `${carouselName}-carousel` : "carousel";
        return(
           <div className={carouselClass}>
                <div className="header">
                    <h1 className="title">{title}</h1>
                    <div className="chevrons">
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
                <div className="section">
                    {items.map((item) => <CarouselItem key={`${carouselName}-${item.id}`} item={item} callback={this._changeView.bind(this,item)}/>)}
                </div>
           </div>
        )
    }
}

Carousel.propTypes = {
    items: PropTypes.array.isRequired
}