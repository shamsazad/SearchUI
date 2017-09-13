import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { searchCity } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { address: 'Montreal, QC' };
        this.onChange = (address) => this.setState( { address })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.log('Error', error))
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={ handleFormSubmit }>
                <Field name="searchCity" component={PlacesAutocomplete}/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'search'
}, null, { searchCity })(SearchBar);
