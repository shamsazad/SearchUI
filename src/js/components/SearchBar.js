/**
 * Created by bdesai on 2016-09-15.
 */
import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from 'moment';

const url = 'http://localhost:8081/yuul/search/';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Montreal",
            startDate: moment(),
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }

    handleDateChange(date) {
        this.setState({
            startDate: date
        });
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
            <form className="searchbar">
                <input type = "text" className ="input-search" name = "location" placeholder = "Search City" required onChange={this.handleChange} />
                <div>
                <span>
                         <DatePicker
                             selected={this.state.startDate}
                             onChange={this.handleDateChange}
                             className="input-date"     />
                </span>
                </div>
                <input type = "submit" value="Search" className="input-date" onClick={this.handleSubmit}/>

            </form>
        );
    }
}
