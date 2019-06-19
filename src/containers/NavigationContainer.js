import React, {Component} from "react";
import { Carousel, Search } from "../components";

export class NavigationContainer extends Component {
    constructor() {
        super();
        this.state = {
            selected: {},
            links: [{
                id: 1,
                display: "Discover"
            },{
                id: 2,
                display: "My Library"
            },{
                id: 3,
                display: "Radio"
            }]
        }
    }

    componentDidMount() {
        const { links } = this.state;
        this.setState({
            selected: links[0]
        })
    }

    _onClick(link) {
        this.setState({
            selected: link
        });
    }

    render() {
        const { links, selected } = this.state;
        return(
            <div className="navigation-container">
                <ul className="links">
                    {links.map(link => {
                        const shouldSelect = link.id === selected.id ? "active" : "ee";
                        return (
                            <li key={link.id} className="link" onClick={this._onClick.bind(this,link)}><a className={shouldSelect}>{link.display}</a></li>
                        );
                    })}
                </ul>
                <Search />
                <div className="user">
                    <img src="./images/bruno.jpg" alt="image" />
                </div>
            </div>
        )
    }
}