/**
 * Created by bdesai on 2016-09-15.
 */
import React from "react";
import axios from "axios";
import Radium from 'radium';
const url = 'http://localhost:8081/yuul/search/';

const styles = {
    searchbar: {
        width: '700px',
        marginLeft: 200,
        marginTop: 100,
    }
}

@Radium
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Montreal",
            numOfPeople:"",
            price: 0,
            rooms: 1,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit () {
        console.log(this.state);
        axios.post(url,
            this.state
        ).then(function (response) {
            dispatch(addPost(response.body))
        }).catch(function (response) {
            request = response;
        });
    }
    render() {
        return(
            <form>
                <input type = "text" name = "location" placeholder = "Search City" required onChange={this.handleChange} style={styles.searchbar} />
                <input type = "date" name = "startDate" placeholder = "Start Date" onChange={this.handleChange}/>
                <input type = "submit" value="Search" onClick={this.handleSubmit}/>
            </form>
        );
    }
}
