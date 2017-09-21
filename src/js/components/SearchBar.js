import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { searchCity } from '../actions/index';
import placeSearch from './placeSearchWrapper';

class SearchBar extends Component {

    render() {
        const { handleSubmit } = this.props;
        console.log(this.props);
        return(
            <form onSubmit={ handleSubmit }>
                <Field
                    name="placeSearch"
                    component={placeSearch}
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'search'
}, null, { searchCity })(SearchBar);
