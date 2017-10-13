import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { searchCity } from '../actions/index';
import placeSearch from './placeSearchWrapper';

class SearchBar extends Component {

    render() {
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={ handleSubmit(searchCity) } className="container-fluid">
                <div className="row">
                    <div className="form-group col-8">
                        <Field
                            name="placeSearch"
                            component={placeSearch}
                            label="Address"
                            className="form-conrol input-group-lg reg_name"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary col">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'search'
})(SearchBar);
