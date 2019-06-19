import React, {Component} from "react";

export class Search extends Component {
    render() {
        return(
            <div className="search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search artists, albums..."/>
            </div>
        );
    }
}