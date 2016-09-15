/**
 * Created by bdesai on 2016-09-15.
 */
import React from "react";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange.bind(this);
    }
    handleChange(e) {
        const city = e.target.value;
        
    }
    render() {
        return(
            <form>
                <input type = "text" placeholder = "Search City" onChange={this.handleChange} />
            </form>
        );
    }
}