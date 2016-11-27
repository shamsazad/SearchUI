/**
 * Created by bdesai on 2016-09-15.
 */
import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

const url = 'http://localhost:8081/yuul/search/';

require('react-datepicker/dist/react-datepicker.css');

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Montreal",
            startDate: "",
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
            <div className="container">
            <form className="form-inline">
                <div className="col-lg-8">
                    <div className="input-group">
                    <input type = "text" className ="form-control" name = "location" placeholder = "Search City" required onChange={this.handleChange} />
                    <span className="input-group-addon">
                         <DatePicker name="startDate"
                                     selected={this.state.startDate}
                                     onChange={this.handleChange} />
                    </span>
                        <input type = "submit" value="Search" onClick={this.handleSubmit}/>
                    </div>
                </div>

            </form>
            </div>
        );
    }
}
