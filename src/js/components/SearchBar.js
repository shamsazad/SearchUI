/**
 * Created by bdesai on 2016-09-15.
 */
import React from "react";
import axios from "axios";
const url = 'http://localhost:8081/yuul/search/';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange.bind(this);
    }
    handleChange (e) {
        if (e.key === 'Enter') {
            const city = e.target.value;
            axios.post(url, {
                location: city,
            }).then(function (response) {
                dispatch(addPost(response.body))
            }).catch(function (response) {
                request = response;
            });
        }
    }
    render() {
        return(
            <form>
                <input type = "text" placeholder = "Search City" onKeyPress={this.handleChange} />
            </form>
        );
    }
}
