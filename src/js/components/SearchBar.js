import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { searchCity } from '../actions/index';
import placeSearch from './placeSearchWrapper';

class SearchBar extends Component {

    render() {
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={ handleSubmit(searchCity) }>
                <Field
                    name="placeSearch"
                    component={placeSearch}
                    label="Address"
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'search'
})(SearchBar);
